import { Class } from "../../../Class"
import { Node, register } from "../../../Node"
import { Content } from "../../Content"
import { Item } from "../Item"

export class Unordered<T extends Item.Content = Item.Content> extends Content<Item<T>> {
	readonly class: Class = "block.list.unordered"
	constructor(content: Item<T>[]) {
		super(content)
	}
	override toString(): string {
		return this.content.map(item => item.toString("- ")).join("\n")
	}
}
export namespace Unordered {}
register("block.list.unordered", data => new Unordered(data.content.map(Node.create)))
