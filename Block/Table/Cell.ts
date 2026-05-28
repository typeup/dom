import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"

export class Cell extends Content<Inline> {
	readonly class: Class = "block.table.cell"
	constructor(
		readonly header: boolean,
		content: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), header: this.header }
	}
}

export namespace Cell {}

register("block.table.cell", data => new Cell(data.header, data.content.map(Node.create)))
