import type { ChatInputCommandInteraction, InteractionResponse, Message, SendableChannels } from "discord.js";
type stages = "formatting" | "logging" | "replying";
export declare class ErrorHandler {
    logChannel: SendableChannels;
    constructor(channel: SendableChannels);
    get channel(): SendableChannels;
    set channel(newChannel: SendableChannels);
    sendError(err: unknown, message?: Message | ChatInputCommandInteraction): Promise<["failed", stages | "undefinedParam"] | ["logged", Message] | ["sucess", Message, Message | InteractionResponse]>;
}
export {};
