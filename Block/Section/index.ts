import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Node, register } from "../../Node/index.js"
import { Block } from "../Block.js"
import { Content } from "../Content.js"

export class Section extends Content<Block> {
	readonly class: Class = "block.section"
	constructor(content: Block[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return `---\n${super.toString()}`
	}
}

export namespace Section {}

register("block.section", data => new Section(data.content.map(Node.create)))
