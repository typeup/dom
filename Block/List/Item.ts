import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import type { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import type { Block } from "../Block.js"
import { Content } from "../Content.js"

export class Item<T extends Item.Content = Item.Content> extends Content<T> {
	readonly class: Class = "block.list.item"
	constructor(content: T[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(symbol: string = " - "): string {
		return symbol + super.toString().replaceAll("\n", "\n\t")
	}
}
export namespace Item {
	export type Content = Inline | Block
}
register("block.list.item", data => new Item(data.content.map(Node.hydrate)))
