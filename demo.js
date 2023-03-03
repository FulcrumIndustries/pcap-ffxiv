const { CaptureInterface } = require("./lib/pcap-ffxiv");

const ci = new CaptureInterface({
	localDataPath: "C:\\Users\\phili\\OneDrive\\Documents\\GitHub\\FFXIVOpcodes",
});

ci.on("message", (message) => {
	if (message.type === "chatHandler") {
		console.log(">>> New chat detected");
		console.log("type: " + message.parsedIpcData.type);
		console.log("__padding1: " + message.parsedIpcData.__padding1);
		console.log("entityId: " + message.parsedIpcData.entityId);
		console.log("characterId: " + message.parsedIpcData.characterId);
		console.log("message: " + message.parsedIpcData.message);
	}
}).on("error", console.error);

ci.once("ready", () => {
	ci.start().then(() => {
		console.log("Everything is started !");
	});
});
