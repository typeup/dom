import { mendly } from "mendly"
import * as inline from "../inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

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
register("Block.Figure", data => new Figure(data.source, data.classes, data.content.map(Node.create)))
