export type GraphQLMessageData = {
	id: string
	operationName: string
	operation: string
	variables: string
}

export type MessageTemplates = {
	[protocolName: string]: ProtocolMessageTemplate
}

export type ProtocolMessageTemplate = {
	[messageType: string]: string
}
