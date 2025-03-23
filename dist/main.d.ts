import type { ChatInputCommandInteraction, Message, SendableChannels } from "discord.js";
type stages = "formatting" | "logging" | "replying";
export declare class ErrorHandler {
    realChannel: SendableChannels;
    constructor(channel: SendableChannels, catchAllErrors?: boolean);
    get channel(): SendableChannels;
    set channel(newChannel: SendableChannels);
    sendError(err: unknown, message?: Message | ChatInputCommandInteraction): Promise<["failed", stages | "undefinedParam"] | "logged" | "sucess">;
}
export {};
