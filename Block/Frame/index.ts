import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"

export class Frame extends Content<Inline> {
	readonly class: Class = "block.frame"
	constructor(
		readonly source: mendly.Uri,
		readonly classes: string[],
		content: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		return `!frame ${this.source} ${this.classes}\n${super.toString()}`
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), classes: this.classes, source: this.source.toString() }
	}
}

export namespace Frame {}

register("block.frame", data => new Frame(data.source, data.classes, data.content.map(Node.create)))
