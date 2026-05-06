import { mendly } from "mendly"
import { Class } from "../../Class"
import { Inline } from "../../Inline"
import { Node, register } from "../../Node"
import { Content } from "../Content"

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
