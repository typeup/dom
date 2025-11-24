import * as inline from "../Inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class Paragraph extends Content<inline.Inline> {
	readonly class: string = "Block.Paragraph"
	constructor(content: inline.Inline[]) {
		super(content)
	}
}

export namespace Paragraph {}

register("Block.Paragraph", data => new Paragraph(data.content.map(Node.create)))
