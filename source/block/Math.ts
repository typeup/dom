import { Error } from "@cogneco/mend"
import { Content } from "./Content"
import * as inline from "../inline"

export class Math extends Content<inline.Inline> {
	readonly class: string = "Block.Math"
	constructor(readonly value: string, content: inline.Inline[], region?: Error.Region) {
		super(content, region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			value: this.value,
		}
	}
	toString() {
		return `$$\n${this.value}\n%%\n${super.toString()}`
	}
}