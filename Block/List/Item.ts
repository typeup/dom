import { mendly } from "mendly"
import { Node, register } from "../../Node"
import { Block } from "../Block"
import { Content } from "../Content"

export class Item extends Content<Block> {
	readonly class: string = "block.list.item"
	constructor(content: Block[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(symbol: string = " - "): string {
		return symbol + super.toString()
	}
}

export namespace Item {}

register("block.list.item", data => new Item(data.content.map(Node.create)))
