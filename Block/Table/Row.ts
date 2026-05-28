import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"
import { Cell } from "./Cell.js"

export class Row extends Content<Cell> {
	readonly class: Class = "block.table.row"
	constructor(content: Cell[], region?: mendly.Error.Region) {
		super(content, region)
	}
}

export namespace Row {}

register("block.table.row", data => new Row(data.content.map(Node.create)))
