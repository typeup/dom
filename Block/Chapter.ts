import { mendly } from "mendly"
import { Node, register } from "../Node"
import { Block } from "./Block"
import { Content } from "./Content"

export class Chapter extends Content<Block> {
	readonly class: string = "block.chapter"
	constructor(content: Block[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString() {
		return `===\n${super.toString()}`
	}
}

export namespace Chapter {}

register("block.chapter", data => new Chapter(data.content.map(Node.create)))
