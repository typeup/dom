import { mendly } from "mendly"
import { Node, register } from "../../Node"
import { Content } from "../Content"
import { Cell } from "./Cell"

export class Row extends Content<Cell> {
	readonly class: string = "block.table.row"
	constructor(content: Cell[], region?: mendly.Error.Region) {
		super(content, region)
	}
}

export namespace Row {}

register("block.table.row", data => new Row(data.content.map(Node.create)))
