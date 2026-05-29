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
	override dehydrate(): { class: Class } | any {
		return { ...super.dehydrate(), value: this.value }
	}
}

export namespace Diagram {}

register("block.diagram", data => new Diagram(data.value, data.content.map(Node.hydrate)))
