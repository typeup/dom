import { mendly } from "mendly"
import { Content } from "./Content"
import * as inline from "../Inline"
import { Node, register } from "../Node"
import { DefinitionData } from "./DefinitionData"

export class DefinitionTerm extends Content<inline.Inline> {
	readonly class: string = "Block.DefinitionTerm"
	constructor(content: inline.Inline[], readonly data: DefinitionData[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return super.toString() + "\n" + this.data.map(d => d.toString()).join("\n")
	}
	override toObject(): { class: string } | any {
		return { ...super.toObject(), data: this.data.map(d => d.toObject()) }
	}
}

export namespace DefinitionTerm {}

register("Block.DefinitionTerm", data => new DefinitionTerm(data.content.map(Node.create), data.data.map(Node.create)))
