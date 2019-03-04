import { Error } from "@cogneco/mend"
import { Content } from "./Content"
import * as inline from "../inline"

export class Heading extends Content<inline.Inline> {
	readonly class: string = "Block.Heading"
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
