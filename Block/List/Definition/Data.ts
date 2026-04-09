import { mendly } from "mendly"
import { Class } from "../../../Class"
import { Inline } from "../../../Inline"
import { Node, register } from "../../../Node"
import { Content } from "../../Content"

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

register("block.list.definition.data", data => new Data(data.content.map(Node.create)))
