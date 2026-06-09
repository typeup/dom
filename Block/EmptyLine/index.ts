import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Hydrator } from "../../Hydrator/index.js"
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

Hydrator.register("block.emptyLine", data => new EmptyLine(data.region))
