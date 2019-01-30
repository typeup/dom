import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export abstract class ContentInline extends Inline {
	constructor(readonly content: Inline[], region?: Error.Region) {
		super(region)
	}
	toString(): string {
		return this.content.map(c => c.toString()).join("")
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			"content": this.content.map(c => c.toObject()),
		}
	}
}
