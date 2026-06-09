import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Hydrator } from "../../Hydrator/index.js"
import { Inline } from "../Inline.js"

export class Math extends Inline {
	readonly class: Class = "inline.math"
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
		return "$" + this.value + "$"
	}
}

export namespace Math {}

Hydrator.register("inline.math", data => new Math(data.value))
