import { Node, register } from "../../Node"
import { Content } from "../Content"
import { Item } from "./Item"

export class Unordered extends Content<Item> {
	readonly class: string = "Block.List.Unordered"
	constructor(content: Item[]) {
		super(content)
	}
	override toString(): string {
		return this.content.map(item => item.toString("- ")).join("\n")
	}
}

export namespace Unordered {}

register("Block.List.Unordered", data => new Unordered(data.content.map(Node.create)))
