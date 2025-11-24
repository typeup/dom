import { mendly } from "mendly"
import { Inline } from "../../../Inline"
import { Node, register } from "../../../Node"
import { Content } from "../../Content"

export class Data extends Content<Inline> {
	readonly class: string = "Block.List.Definition.Data"
	constructor(content: Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return ": " + super.toString()
	}
}

export namespace Data {}

register("Block.List.Definition.Data", data => new Data(data.content.map(Node.create)))
