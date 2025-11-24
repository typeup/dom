import { Inline } from "../Inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class Paragraph extends Content<Inline> {
	readonly class: string = "block.paragraph"
	constructor(content: Inline[]) {
		super(content)
	}
}

export namespace Paragraph {}

register("block.paragraph", data => new Paragraph(data.content.map(Node.create)))
