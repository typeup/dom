import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"
import { Cell as _Cell } from "./Cell.js"
import { Row as _Row } from "./Row.js"

export class Table extends Content<Inline> {
	readonly class: Class = "block.table"
	constructor(
		readonly alignments: ("" | "left" | "center" | "right")[],
		readonly rows: Table.Row[],
		content: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		const rows = this.rows.map(row => "| " + row.content.map(cell => cell.content.toString()).join(" | ") + " |\n")
		rows.splice(
			1,
			0,
			"|"
				+ this.alignments
					.map(alignment => {
						let result: string
						switch (alignment) {
							default:
								result = "---"
								break
							case "left":
								result = ":--"
								break
							case "center":
								result = ":-:"
								break
							case "right":
								result = "--:"
								break
						}
						return result
					})
					.join("|")
				+ "|\n"
		)
		return rows.join("") + super.toString()
	}
	override dehydrate(): { class: Class } | any {
		return { ...super.dehydrate(), alignments: this.alignments, rows: this.rows.map(row => row.dehydrate()) }
	}
}

export namespace Table {
	export import Row = _Row
	export import Cell = _Cell
}

register("block.table", data => new Table(data.alignments, data.rows.map(Node.hydrate), data.content.map(Node.hydrate)))
