import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"

export class Diagram extends Content<Inline> {
	readonly class: Class = "block.diagram"
	constructor(
		readonly value: string,
		content: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		return `++\n${this.value}\n++\n${super.toString()}`
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), value: this.value }
	}
}

export namespace Diagram {}

register("block.diagram", data => new Diagram(data.value, data.content.map(Node.create)))
