import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"

export class Math extends Content<Inline> {
	readonly class: Class = "block.math"
	constructor(
		readonly value: string,
		content: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		return `$$\n${this.value}\n$$\n${super.toString()}`
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), value: this.value }
	}
}

export namespace Math {}

register("block.math", data => new Math(data.value, data.content.map(Node.create)))
