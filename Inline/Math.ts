import { mendly } from "mendly"
import { register } from "../Node"
import { Inline } from "./Inline"

export class Math extends Inline {
	readonly class: string = "Inline.Math"
	constructor(readonly value: string, region?: mendly.Error.Region) {
		super(region)
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			value: this.value,
		}
	}
	override toString(): string {
		return "$" + this.value + "$"
	}
}

export namespace Math {}

register("Inline.Math", data => new Math(data.value))
