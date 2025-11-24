import { Node, register } from "../../Node"
import { Content } from "../Content"
import { Item } from "./Item"

export class Ordered extends Content<Item> {
	readonly class: string = "block.list.ordered"
	constructor(content: Item[]) {
		super(content)
	}
	override toString(): string {
		return this.content.map(item => item.toString("1. ")).join("\n")
	}
}

export namespace Ordered {}

register("block.list.ordered", data => new Ordered(data.content.map(Node.create) as Item[]))
