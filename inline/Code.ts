import { mendly } from "mendly"
import { register } from "../Node"
import { Inline } from "./Inline"

export class Code extends Inline {
	readonly class: string = "Inline.Code"
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
		return "%" + this.value + "%"
	}
}
register("Inline.Code", data => new Code(data.value))
