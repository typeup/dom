import { mendly } from "mendly"
import * as inline from "../Inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class DefinitionData extends Content<inline.Inline> {
	readonly class: string = "Block.DefinitionData"
	constructor(content: inline.Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return ": " + super.toString()
	}
}

export namespace DefinitionData {}

register("Block.DefinitionData", data => new DefinitionData(data.content.map(Node.create)))
