import { mendly } from "mendly"
import * as inline from "../Inline"
import { Node, register } from "../Node"
import { Content } from "./Content"
import { TableRow } from "./TableRow"

export class Table extends Content<inline.Inline> {
	readonly class: string = "Block.Table"
	constructor(
		readonly alignments: ("" | "left" | "center" | "right")[],
		readonly rows: TableRow[],
		content: inline.Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		const rows = this.rows.map(row => "| " + row.content.map(cell => cell.content.toString()).join(" | ") + " |\n")
		rows.splice(
			1,
			0,
			"|" +
				this.alignments
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
					.join("|") +
				"|\n"
		)
		return rows.join("") + super.toString()
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			alignments: this.alignments,
			rows: this.rows.map(row => row.toObject()),
		}
	}
}

export namespace Table {}

register("Block.Table", data => new Table(data.alignments, data.rows.map(Node.create), data.content.map(Node.create)))
