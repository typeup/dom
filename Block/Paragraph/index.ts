import { Class } from "../../Class/index.js"
import { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"

export class Paragraph extends Content<Inline> {
	readonly class: Class = "block.paragraph"
	constructor(content: Inline[]) {
		super(content)
	}
}

export namespace Paragraph {}

register("block.paragraph", data => new Paragraph(data.content.map(Node.create)))
