import { Error } from "@cogneco/mend"
import { Node, register } from "../Node"
import { Content } from "./Content"
import { TableCell } from "./TableCell"

export class TableRow extends Content<TableCell> {
	readonly class: string = "Block.TableRow"
	constructor(content: TableCell[], region?: Error.Region) {
		super(content, region)
	}
}
register("Block.TableRow", data => new TableRow(data.content.map(Node.create)))
