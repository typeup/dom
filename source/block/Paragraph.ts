import { Block } from "./Block"
import { ContentBlock } from "./ContentBlock"
import * as inline from "../inline"

export class Paragraph extends ContentBlock<inline.Inline> {
	readonly class: string = "Paragraph"
	constructor(content: inline.Inline[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left.merge(right)))
	}
}
