import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import * as inline from "../inline/"

export class CodeBlock extends ContentBlock<inline.Inline> {
	readonly class: string = "CodeBlock"
	constructor(readonly language: string, readonly value: string, content: inline.Inline[], region: Error.Region) {
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
