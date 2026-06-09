import { Class } from "../../../Class/index.js"
import { Hydrator } from "../../../Hydrator/index.js"
import { Content } from "../../Content.js"
import { Item } from "../Item.js"

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
Hydrator.register("block.list.unordered", data => new Unordered(data.content.map(Hydrator.hydrate)))
