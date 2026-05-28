import { Class } from "../../../Class/index.js"
import { Node, register } from "../../../Node/index.js"
import { Content } from "../../Content.js"
import { Item } from "../Item.js"

export class Ordered<T extends Item.Content = Item.Content> extends Content<Item<T>> {
	readonly class: Class = "block.list.ordered"
	constructor(content: Item<T>[]) {
		super(content)
	}
	override toString(): string {
		return this.content.map(item => item.toString("1. ")).join("\n")
	}
}
export namespace Ordered {}
register("block.list.ordered", data => new Ordered(data.content.map(Node.create)))
