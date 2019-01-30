import { ContentBlock } from "./ContentBlock"
import { ListItem } from "./ListItem"

export class OrderedList extends ContentBlock<ListItem> {
	readonly class: string = "OrderedList"
	constructor(content: ListItem[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left.merge(right)))
	}
	toString() {
		return this.content.map(item => item.toString("1. ")).join("\n")
	}
}
