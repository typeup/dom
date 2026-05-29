import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { register } from "../../Node/index.js"
import { Inline } from "../Inline.js"

export class Text extends Inline {
	readonly class: Class = "inline.text"
	constructor(
		readonly value: string,
		region?: mendly.Error.Region
	) {
		super(region)
	}
	override dehydrate(): { class: Class } | any {
		return { ...super.dehydrate(), value: this.value }
	}
	override toString(): string {
		return this.value
	}
}

export namespace Text {}

register("inline.text", data => new Text(data.value))
