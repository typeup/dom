import { mendly } from "mendly"
import { Node, register } from "../../Node"
import { Block } from "../Block"
import { Content } from "../Content"

export class Item extends Content<Block> {
	readonly class: string = "Block.List.Item"
	constructor(content: Block[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(symbol: string = " - "): string {
		return symbol + super.toString()
	}
}

export namespace Item {}

register("Block.List.Item", data => new Item(data.content.map(Node.create)))
