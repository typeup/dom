import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Math extends Inline {
	readonly class: string = "Inline.Math"
	constructor(readonly value: string, region?: Error.Region) {
		super(region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			value: this.value,
		}
	}
	toString(): string {
		return "$" + this.value + "$"
	}
}
