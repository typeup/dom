import { mendly } from "mendly"
import { register } from "../Node"
import { Block } from "./Block"

export class EmptyLine extends Block {
	readonly class: string = "block.emptyLine"
	constructor(region?: mendly.Error.Region) {
		super(region)
	}
	override toString(): string {
		return "\n"
	}
}

export namespace EmptyLine {}

register("block.emptyLine", data => new EmptyLine(data.region))
