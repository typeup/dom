import { mendly } from "mendly"
import { Class } from "../../Class"
import { Inline } from "../../Inline"
import { Node, register } from "../../Node"
import { Content } from "../Content"

export class Code extends Content<Inline> {
	readonly class: Class = "block.code"
	constructor(
		readonly language: string,
		readonly value: string,
		content: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), language: this.language, value: this.value }
	}
	override toString() {
		return `%% ${this.language}\n${this.value}\n%%\n${super.toString()}`
	}
}

export namespace Code {}

register("block.code", data => new Code(data.language, data.value, data.content.map(Node.create)))
