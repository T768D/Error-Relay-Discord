import errorHandler from "../dist/main.js";

const mockChannel = {
	send: (msg) => console.warn("Sent: ", msg)
};

const mockMessage = {
	reply: (msg) => console.warn("Replied: ", msg)
};

const mockCommand = {
	...mockMessage,
	isChatInputCommand: () => true
};

const handler = new errorHandler(mockChannel);
await handler.sendError("This is a error");
await handler.sendError("Another error", mockMessage);
await handler.sendError("Command Interaction error!", mockCommand);

const response = await handler.sendError("this is a error", {});
console.log(response);

handler.channel = {};
try {
	await handler.sendError("This should fail!");
}

catch (err) {
	console.error(err.message);
}



new errorHandler(mockChannel, true);

throw new Error("lsdkfjlsjfksdl");

console.log("This should be logged!");