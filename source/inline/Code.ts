import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Code extends Inline {
	readonly class: string = "Code"
	constructor(readonly content: string, region?: Error.Region) {
		super(region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			content: this.content,
		}
	}
	toString(): string {
		return "%" + super.toString() + "%"
	}
}
