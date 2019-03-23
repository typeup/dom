import { Error } from "@cogneco/mend"
import { Content } from "./Content"
import { Inline } from "./Inline"

export class Link extends Content {
	readonly class: string = "Inline.Link"
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
