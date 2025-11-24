import { Inline } from "../Inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class Paragraph extends Content<Inline> {
	readonly class: string = "Block.Paragraph"
	constructor(content: Inline[]) {
		super(content)
	}
}

export namespace Paragraph {}

register("Block.Paragraph", data => new Paragraph(data.content.map(Node.create)))
