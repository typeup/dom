import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { register } from "../../Node/index.js"
import { Inline } from "../Inline.js"

export class Code extends Inline {
	readonly class: Class = "inline.code"
	constructor(
		readonly value: string,
		region?: mendly.Error.Region
	) {
		super(region)
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), value: this.value }
	}
	override toString(): string {
		return "%" + this.value + "%"
	}
}

export namespace Code {}

register("inline.code", data => new Code(data.value))
