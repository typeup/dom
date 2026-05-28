import { mendly } from "mendly"
import { Class } from "../../../Class/index.js"
import { Inline } from "../../../Inline/index.js"
import { Node, register } from "../../../Node/index.js"
import { Content } from "../../Content.js"
import { Data } from "./Data.js"

export class Term extends Content<Inline> {
	readonly class: Class = "block.list.definition.term"
	constructor(
		content: Inline[],
		readonly data: Data[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		return super.toString() + "\n" + this.data.map(d => d.toString()).join("\n")
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), data: this.data.map(d => d.toObject()) }
	}
}

export namespace Term {}

register("block.list.definition.term", data => new Term(data.content.map(Node.create), data.data.map(Node.create)))
