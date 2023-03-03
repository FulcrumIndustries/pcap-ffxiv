import { BufferReader } from "../../BufferReader";
import { ChatHandler } from "../../definitions";

export function chatHandler(reader: BufferReader): ChatHandler {
	return {
		type: reader.nextUInt16(), //0x02
		__padding1: reader.nextUInt16(), // 0x04
		entityId: reader.nextUInt32(), // 0x08
		characterId: reader.nextUInt64(), // 0x16
		message: reader.skip(10).nextString(),
	};
}
		// uint16_t type;
		// uint8_t __padding1;
		// uint8_t __padding2;
		// uint32_t entityId;
		// uint64_t characterId;
		// uint32_t __unknown3;
		// char speakerName[32];
		// char message[1024];
