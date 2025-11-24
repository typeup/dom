import { mendly } from "mendly"
import { Inline } from "../Inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class Figure extends Content<Inline> {
	readonly class: string = "block.figure"
	constructor(
		readonly source: mendly.Uri,
		readonly classes: string[],
		content: Inline[],
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

register("block.figure", data => new Figure(data.source, data.classes, data.content.map(Node.create)))
