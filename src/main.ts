import type { ChatInputCommandInteraction, Message, SendableChannels } from "discord.js";

type stages = "formatting" | "logging" | "replying";

/**
 * You only need to create a new instance of the erorr handler once to set the channel. 
 * After that just call the sendError function
*/
export default class ErrorHandler {

	/**
	 * @param {SendableChannels} channel The channel that the error message will be sent to
	*/
	constructor(
		/**
		 * @type {SendableChannels}
		 * @description The channel that the error message will be sent to
		*/
		public channel: SendableChannels
	) { }

	/**
	 * @param {unknown} err The error variable caught from the try catch, or a string detailing the error message
	 * @param {Message | ChatInputCommandInteraction | undefined} message The interaction or message that will be replied to that caused the error
	 * 
	 * @returns {Promise<["failed", stages | "undefinedParam"] | "logged" | "sucess">} If failed, it returns ["failed", and the stage of failure].
	 * Otherwise it returns either sucess for a full reply and log, or logged for just the log.
	*/
	public async sendError(err: unknown, message?: Message | ChatInputCommandInteraction): Promise<["failed", stages | "undefinedParam"] | "logged" | "sucess"> {
		if (!err) return ["failed", "undefinedParam"] as const;

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
			await this.channel.send(formatted);

			if (!message) return "logged";

			stage = "replying";

			if ("isChatInputCommand" in message) {

				if (message.replied || message.deferred) {
					const contents = await message.fetchReply();
					await message.editReply({
						content: `## Something went wrong, the error has been logged. **The response below may be bugged or inaccurate** \n\n${contents.content}`,
						components: []
					});
				}

				else if (message.isRepliable()) {
					await message.reply({
						content: "Something went wrong, the error has been logged",
						flags: "Ephemeral",
						components: []
					});
				}
			}

			else {
				await message.reply("Something went wrong, the error has been logged");
			}

			return "sucess";
		}

		catch {

			if (stage === "logging") {
				// check if channel is right type etc
			}

			return ["failed", stage];
		}
	}
}