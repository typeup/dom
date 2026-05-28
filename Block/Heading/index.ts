import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"

export class Heading extends Content<Inline> {
	readonly class: Class = "block.heading"
	constructor(
		readonly level: number,
		content: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		return "#".repeat(this.level) + " " + super.toString()
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), level: this.level }
	}
}

export namespace Heading {}

register("block.heading", data => new Heading(data.level, data.content.map(Node.create)))
