import { mendly } from "mendly"
import * as inline from "../inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class Math extends Content<inline.Inline> {
	readonly class: string = "Block.Math"
	constructor(readonly value: string, content: inline.Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return `$$\n${this.value}\n$$\n${super.toString()}`
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			value: this.value,
		}
	}
}
register("Block.Math", data => new Math(data.value, data.content.map(Node.create)))
