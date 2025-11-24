import { mendly } from "mendly"
import { Inline } from "../Inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class Heading extends Content<Inline> {
	readonly class: string = "block.heading"
	constructor(readonly level: number, content: Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return "#".repeat(this.level) + " " + super.toString()
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			level: this.level,
		}
	}
}

export namespace Heading {}

register("block.heading", data => new Heading(data.level, data.content.map(Node.create)))
