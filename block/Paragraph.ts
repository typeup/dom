import { Block } from "./Block"
import { Content } from "./Content"
import * as inline from "../inline"

export class Paragraph extends Content<inline.Inline> {
	readonly class: string = "Block.Paragraph"
	constructor(content: inline.Inline[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left && right ? left.merge(right) : left || right))
	}
}
