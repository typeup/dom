import { Content } from "./Content"
import { ListItem } from "./ListItem"

export class OrderedList extends Content<ListItem> {
	readonly class: string = "Block.OrderedList"
	constructor(content: ListItem[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left && right ? left.merge(right) : left || right))
	}
	toString() {
		return this.content.map(item => item.toString("1. ")).join("\n")
	}
}
