import { Block } from "./Block"
import { Error } from "@cogneco/mend"

export class Assignment extends Block {
	readonly class: string = "Assignment"
	constructor(readonly name: string, readonly value: string, region?: Error.Region) {
		super(region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			name: this.name,
			value: this.value,
		}
	}
	toString() {
		return this.name + " = " + this.value + "\n"
	}
}
