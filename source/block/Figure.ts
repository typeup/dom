import { Error, Uri } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import * as inline from "../inline"

export class Figure extends ContentBlock<inline.Inline> {
	readonly class: string = "Figure"
	constructor(readonly source: Uri.Locator, readonly classes: string[], content: inline.Inline[], region: Error.Region) {
		super(content, region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			classes: this.classes,
			source: this.source.toString(),
		}
	}
	toString() {
		return `!figure ${this.source} ${this.classes}\n${super.toString()}`
	}
}
