import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Text extends Inline {
	readonly class: string = "Text"
	constructor(private value: string, region: Error.Region) {
		super(region)
	}
	toObject(): { class: string } | any {
		return { ...super.toObject(), value: this.value }
	}
	toString(): string {
		return this.value
	}
}
