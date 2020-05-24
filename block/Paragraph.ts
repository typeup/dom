import { Node, register } from "../Node"
import { Content } from "./Content"
import * as inline from "../inline"

export class Paragraph extends Content<inline.Inline> {
	readonly class: string = "Block.Paragraph"
	constructor(content: inline.Inline[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left && right ? left.merge(right) : left || right))
	}
}
register("Block.Paragraph", data => new Paragraph(data.content.map(Node.create)))
