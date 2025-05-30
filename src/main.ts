import type { ChatInputCommandInteraction, InteractionResponse, Message, SendableChannels } from "discord.js";

type stages = "formatting" | "logging" | "replying";

/**
 * You only need to create a new instance of the erorr handler once to set the channel. 
 * After that just call the sendError function
*/
export class ErrorHandler {

	/**
	 * @description The channel that the error message will be sent to
	*/
	#logChannel: SendableChannels;

	/**
	 * @param channel The channel that the error message will be sent to
	*/
	constructor(channel: SendableChannels) {
		this.#logChannel = channel;
	}

	public get channel() {
		return this.#logChannel;
	}

	public set channel(newChannel: SendableChannels) {
		if ("send" in newChannel && typeof newChannel.send === "function")
			this.#logChannel = newChannel;
		else
			console.error("Cannot change channel to a invalid variable! Variable attempted to be changed to:\n", newChannel);
	}

	/**
	 * @param err The error variable caught from the try catch, or a string detailing the error message
	 * @param message The interaction or message that will be replied to the user that caused the error
	 * @param extraMsg Extra message that will be sent along with the errro message when sending the error to the log channel
	 * @param customReply Custom reply message that will be replied to the user that caused the error
	 * 
	 * @returns If failed, it returns ["failed", and the stage of failure].
	 * Otherwise it returns a array with [sucess, the sent log message, the interaction response]
	*/
	public async sendError(err: unknown, message?: Message | ChatInputCommandInteraction, extraMsg?: string, customReply?: string): Promise<["failed", stages | "undefinedError"] | ["logged", Message] | ["loggedReplied", Message, Message | InteractionResponse]> {
		if (!err) return ["failed", "undefinedError"] as const;

		let stage: stages = "formatting";

		try {

			let formatted = "";
			const arr = String(err instanceof Error ? err.stack : err)
				.replace(/\(file:\/\/\/.*\/|C:\\.*\\/g, "  workspace\\")
				.replace(/\( \(|<anonymous>/g, "")
				.split("\n");

			for (const item of arr) {
				if (!/node_modules|node:internal/.test(item))
					formatted += item + "\n";
			}

			stage = "logging";
			console.error(err);
			const logMsg = await this.#logChannel.send(extraMsg ? `${extraMsg}\n` : "" + formatted);

			if (!message) return ["logged", logMsg];

			stage = "replying";


			if ("isChatInputCommand" in message) {

				let contents: Message | InteractionResponse;

				if (message.replied || message.deferred) {
					const fetched = await message.fetchReply();
					contents = await message.editReply({
						content: `${customReply || "## Something went wrong, the error has been logged."} **The response below may be bugged or inaccurate** \n_ _\n${fetched.content}`,
						components: []
					});
				}

				else if (message.isRepliable()) {
					contents = await message.reply({
						content: customReply || "Something went wrong, the error has been logged",
						flags: "Ephemeral",
						components: []
					});
				}

				else {
					return ["failed", stage];
				}

				return ["loggedReplied", logMsg, contents];
			}

			else {
				const reply = await message.reply("Something went wrong, the error has been logged");
				return ["loggedReplied", logMsg, reply];
			}

		}

		catch {
			return ["failed", stage];
		}
	}
};

module.exports = ErrorHandler;