import { Node, register } from "../../Node"
import { Content } from "../Content"
import { Item } from "./Item"

export class Unordered extends Content<Item> {
	readonly class: string = "block.list.unordered"
	constructor(content: Item[]) {
		super(content)
	}
	override toString(): string {
		return this.content.map(item => item.toString("- ")).join("\n")
	}
}

export namespace Unordered {}

register("block.list.unordered", data => new Unordered(data.content.map(Node.create)))
