import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Text extends Inline {
	readonly class: string = "InlineText"
	constructor(readonly value: string, region?: Error.Region) {
		super(region)
	}
	toObject(): { class: string } | any {
		return { ...super.toObject(), value: this.value }
	}
	toString(): string {
		return this.value
	}
}
