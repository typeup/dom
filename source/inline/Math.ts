import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Math extends Inline {
	readonly class: string = ""
	constructor(readonly content: string, region?: Error.Region) {
		super(region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			type: "Math", content: this.content,
		}
	}
	toString(): string {
		return "$" + super.toString() + "$"
	}
}
