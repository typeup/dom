import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Code extends Inline {
	readonly class: string = "Inline.Code"
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
		return "%" + this.value + "%"
	}
}
