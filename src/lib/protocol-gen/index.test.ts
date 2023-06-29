import type { GraphQLMessageData } from "$lib/types"
import { describe, it, expect } from "vitest"
import { generateMessage, protocolMessages } from "."

const messageData: GraphQLMessageData = {
	id: "1",
	operationName: "MyOperation",
	operation: "query MyOperation($name: String) { hello(name: $name): String }",
	variables: '{ "name": "World" }'
}

describe("generate message", () => {
	describe("graphql-ws", () => {
		it("connection_init", () => {
			const messageTemplate = protocolMessages["graphql-ws"]["connection_init"]
			const expected = '{ "type": "connection_init" }'
			expect(generateMessage(messageTemplate, messageData)).toBe(expected)
		})
		it("start", () => {
			const messageTemplate = protocolMessages["graphql-ws"]["start"]
			const expected =
				'{"id":"1","type":"start","payload":{"operationName":"MyOperation","query":"query MyOperation($name: String) { hello(name: $name): String }","variables":{ "name": "World" }}}'
			expect(generateMessage(messageTemplate, messageData)).toBe(expected)
		})
	})
})
