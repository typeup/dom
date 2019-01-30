import { Error } from "@cogneco/mend"
import { ContentInline } from "./ContentInline"
import { Inline } from "./Inline"

export class Link extends ContentInline {
	readonly class: string = "Link"
	constructor(readonly target: string, content: Inline[], region?: Error.Region) {
		super(content, region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			target: this.target,
		}
	}
	toString(): string {
		return "[" + this.target + " " + super.toString() + "]"
	}
}
