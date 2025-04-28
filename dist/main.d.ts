import type { ChatInputCommandInteraction, InteractionResponse, Message, SendableChannels } from "discord.js";
type stages = "formatting" | "logging" | "replying";
/**
 * You only need to create a new instance of the erorr handler once to set the channel.
 * After that just call the sendError function
*/
export declare class ErrorHandler {
    /**
     * @description The channel that the error message will be sent to
    */
    logChannel: SendableChannels;
    /**
     * @param channel The channel that the error message will be sent to
    */
    constructor(channel: SendableChannels);
    get channel(): SendableChannels;
    set channel(newChannel: SendableChannels);
    /**
     * @param err The error variable caught from the try catch, or a string detailing the error message
     * @param message The interaction or message that will be replied to the user that caused the error
     * @param extraMsg Extra message that will be sent along with the errro message when sending the error to the log channel
     * @param customReply Custom reply message that will be replied to the user that caused the error
     *
     * @returns If failed, it returns ["failed", and the stage of failure].
     * Otherwise it returns a array with [sucess, the sent log message, the interaction response]
    */
    sendError(err: unknown, message?: Message | ChatInputCommandInteraction, extraMsg?: string, customReply?: string): Promise<["failed", stages | "undefinedError"] | ["logged", Message] | ["loggedReplied", Message, Message | InteractionResponse]>;
}
export {};
