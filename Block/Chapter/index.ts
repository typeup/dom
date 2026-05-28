import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Node, register } from "../../Node/index.js"
import { Block } from "../Block.js"
import { Content } from "../Content.js"

export class Chapter extends Content<Block> {
	readonly class: Class = "block.chapter"
	constructor(content: Block[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString() {
		return `===\n${super.toString()}`
	}
}

export namespace Chapter {}

register("block.chapter", data => new Chapter(data.content.map(Node.create)))
