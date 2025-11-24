import { mendly } from "mendly"
import { Inline } from "../Inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class Diagram extends Content<Inline> {
	readonly class: string = "Block.Diagram"
	constructor(readonly value: string, content: Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return `++\n${this.value}\n++\n${super.toString()}`
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			value: this.value,
		}
	}
}

export namespace Diagram {}

register("Block.Diagram", data => new Diagram(data.value, data.content.map(Node.create)))
