import { mendly } from "mendly"
import { Content } from "./Content"
import * as inline from "../Inline"
import { Node, register } from "../Node"

export class Figure extends Content<inline.Inline> {
	readonly class: string = "Block.Figure"
	constructor(
		readonly source: mendly.Uri,
		readonly classes: string[],
		content: inline.Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		return `!figure ${this.source} ${this.classes}\n${super.toString()}`
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			classes: this.classes,
			source: this.source.toString(),
		}
	}
}

export namespace Figure {}

register("Block.Figure", data => new Figure(data.source, data.classes, data.content.map(Node.create)))
