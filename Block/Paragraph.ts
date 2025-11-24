import { Content } from "./Content"
import * as inline from "../Inline"
import { Node, register } from "../Node"

export class Paragraph extends Content<inline.Inline> {
	readonly class: string = "Block.Paragraph"
	constructor(content: inline.Inline[]) {
		super(
			content,
			content.map(c => c.region).reduce((left, right) => (left && right ? left.merge(right) : left || right))
		)
	}
}

export namespace Paragraph {}

register("Block.Paragraph", data => new Paragraph(data.content.map(Node.create)))
