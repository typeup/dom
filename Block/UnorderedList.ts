import { Node, register } from "../Node"
import { Content } from "./Content"
import { ListItem } from "./ListItem"

export class UnorderedList extends Content<ListItem> {
	readonly class: string = "Block.UnorderedList"
	constructor(content: ListItem[]) {
		super(content)
	}
	override toString(): string {
		return this.content.map(item => item.toString("- ")).join("\n")
	}
}

export namespace UnorderedList {}

register("Block.UnorderedList", data => new UnorderedList(data.content.map(Node.create)))
