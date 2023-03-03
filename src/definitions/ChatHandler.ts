export interface ChatHandler {
	type: number;
	__padding1: number;
	entityId: number;
	characterId: bigint;
	message: string;
}
	// uint16_t type;
		// uint8_t __padding1;
		// uint8_t __padding2;
		// uint32_t entityId;
		// uint64_t characterId;
		// uint32_t __unknown3;
		// char speakerName[32];
		// char message[1024];