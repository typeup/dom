import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { register } from "../../Node/index.js"
import { Block } from "../Block.js"

export class EmptyLine extends Block {
	readonly class: Class = "block.emptyLine"
	constructor(region?: mendly.Error.Region) {
		super(region)
	}
	override toString(): string {
		return "\n"
	}
}

export namespace EmptyLine {}

register("block.emptyLine", data => new EmptyLine(data.region))
