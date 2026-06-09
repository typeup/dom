import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Hydrator } from "../../Hydrator/index.js"
import { Inline } from "../../Inline/index.js"
import { Content } from "../Content.js"

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
	override dehydrate(): { class: Class } | any {
		return { ...super.dehydrate(), language: this.language, value: this.value }
	}
	override toString() {
		return `%% ${this.language}\n${this.value}\n%%\n${super.toString()}`
	}
}

export namespace Code {}

Hydrator.register("block.code", data => new Code(data.language, data.value, data.content.map(Hydrator.hydrate)))
