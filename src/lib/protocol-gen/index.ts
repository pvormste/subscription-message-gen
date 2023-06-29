import type { GraphQLMessageData, MessageTemplates } from "$lib/types"
import { json } from "@sveltejs/kit"

export const protocolMessages: MessageTemplates = {
	"graphql-ws": {
		connection_init: '{ "type": "connection_init" }',
		start:
			'{"id":"%id%","type":"start","payload":{"operationName":"%operation_name%","query":"%operation%","variables":%variables%}}'
	}
}

export const generateMessage = (
	messageTemplate: String,
	messageData: GraphQLMessageData
): String => {
	let replacedMessage = messageTemplate.replace("%id%", messageData.id)
	replacedMessage = replacedMessage.replace("%operation_name%", messageData.operationName)
	replacedMessage = replacedMessage.replace("%operation%", messageData.operation)
	if (messageData.variables.length > 0) {
		//let variablesJson = JSON.parse(messageData.variables)
		replacedMessage = replacedMessage.replace("%variables%", messageData.variables)
	} else {
		replacedMessage = replacedMessage.replace("%variables%", "null")
	}
	return replacedMessage
}
