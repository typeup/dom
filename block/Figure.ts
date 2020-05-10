import { Error, Uri } from "@cogneco/mend"
import { Node, register } from "../Node"
import { Content } from "./Content"
import * as inline from "../inline"

export class Figure extends Content<inline.Inline> {
	readonly class: string = "Block.Figure"
	constructor(readonly source: Uri.Locator, readonly classes: string[], content: inline.Inline[], region?: Error.Region) {
		super(content, region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			classes: this.classes,
			source: this.source.toString(),
		}
	}
	toString() {
		return `!figure ${this.source} ${this.classes}\n${super.toString()}`
	}
}
register("Block.Figure", data => new Figure(data.source, data.classes, data.content.map(Node.create)))
