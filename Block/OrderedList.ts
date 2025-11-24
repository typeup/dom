import { Node, register } from "../Node"
import { Content } from "./Content"
import { ListItem } from "./ListItem"

export class OrderedList extends Content<ListItem> {
	readonly class: string = "Block.OrderedList"
	constructor(content: ListItem[]) {
		super(content)
	}
	override toString(): string {
		return this.content.map(item => item.toString("1. ")).join("\n")
	}
}

export namespace OrderedList {}

register("Block.OrderedList", data => new OrderedList(data.content.map(Node.create) as ListItem[]))
