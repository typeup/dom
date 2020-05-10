import { Error } from "@cogneco/mend"
import { Node, register } from "../Node"
import { Content } from "./Content"
import * as inline from "../inline"

export class Diagram extends Content<inline.Inline> {
	readonly class: string = "Block.Diagram"
	constructor(readonly value: string, content: inline.Inline[], region?: Error.Region) {
		super(content, region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			value: this.value,
		}
	}
	toString() {
		return `++\n${this.value}\n++\n${super.toString()}`
	}
}
register("Block.Diagram", data => new Diagram(data.value, data.content.map(Node.create)))
