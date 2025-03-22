import handler from "../dist/main.js";

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

const b = new handler(mockChannel);
await b.sendError("This is a error");
await b.sendError("Another error", mockMessage);
await b.sendError("Command Interaction error!", mockCommand);

const response = await b.sendError("this is a error", {});
console.log(response);

b.channel = {};
try {
	await b.sendError("This should fail!");
}

catch (err) {
	console.error(err.message);
}