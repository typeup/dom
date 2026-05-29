import { mendly } from "mendly"
import { Class } from "../../../Class/index.js"
import { Inline } from "../../../Inline/index.js"
import { Node, register } from "../../../Node/index.js"
import { Content } from "../../Content.js"

export class Data extends Content<Inline> {
	readonly class: Class = "block.list.definition.data"
	constructor(content: Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return ": " + super.toString()
	}
}

export namespace Data {}

register("block.list.definition.data", data => new Data(data.content.map(Node.hydrate)))
