import { Node, register } from "../Node"
import { Content } from "./Content"
import { ListItem } from "./ListItem"

export class UnorderedList extends Content<ListItem> {
	readonly class: string = "Block.UnorderedList"
	constructor(content: ListItem[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left && right ? left.merge(right) : left || right))
	}
	toString() {
		return this.content.map(item => item.toString("- ")).join("\n")
	}
}
register("Block.UnorderedList", data => new UnorderedList(data.content.map(Node.create)))
