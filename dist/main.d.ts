import type { ChatInputCommandInteraction, Message, SendableChannels } from "discord.js";
type stages = "formatting" | "logging" | "replying";
export default class ErrorHandler {
    channel: SendableChannels;
    constructor(channel: SendableChannels);
    sendError(err: unknown, message?: Message | ChatInputCommandInteraction): Promise<["failed", stages | "undefinedParam"] | "logged" | "sucess">;
}
export {};
