import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import * as inline from "../inline"

export class Heading extends ContentBlock<inline.Inline> {
	readonly class: string = "Heading"
	constructor(readonly level: number, content: inline.Inline[], region?: Error.Region) {
		super(content, region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			level: this.level,
		}
	}
	toString() {
		return "#".repeat(this.level) + " " + super.toString()
	}
}
