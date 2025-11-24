import { mendly } from "mendly"
import { Node, register } from "../Node"
import { Block } from "./Block"
import { Content } from "./Content"

export class ListItem extends Content<Block> {
	readonly class: string = "Block.ListItem"
	constructor(content: Block[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(symbol?: string): string {
		if (!symbol)
			symbol = " - "
		return symbol + super.toString()
	}
}
register("Block.ListItem", data => new ListItem(data.content.map(Node.create)))
