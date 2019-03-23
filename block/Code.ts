import { Error } from "@cogneco/mend"
import { Content } from "./Content"
import * as inline from "../inline"

export class Code extends Content<inline.Inline> {
	readonly class: string = "Block.Code"
	constructor(readonly language: string, readonly value: string, content: inline.Inline[], region?: Error.Region) {
		super(content, region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			language: this.language,
			value: this.value,
		}
	}
	toString() {
		return `%% ${this.language}\n${this.value}\n%%\n${super.toString()}`
	}
}
