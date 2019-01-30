import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import * as inline from "../inline"

export class MathBlock extends ContentBlock<inline.Inline> {
	readonly class: string = "MathBlock"
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
