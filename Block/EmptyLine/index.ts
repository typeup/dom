import { mendly } from "mendly"
import { Class } from "../../Class"
import { register } from "../../Node"
import { Block } from "../Block"

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
