import { mendly } from "mendly"
import * as inline from "../inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class Code extends Content<inline.Inline> {
	readonly class: string = "Block.Code"
	constructor(
		readonly language: string,
		readonly value: string,
		content: inline.Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			language: this.language,
			value: this.value,
		}
	}
	override toString() {
		return `%% ${this.language}\n${this.value}\n%%\n${super.toString()}`
	}
}
register("Block.Code", data => new Code(data.language, data.value, data.content.map(Node.create)))
