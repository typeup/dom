import { Error } from "@cogneco/mend"
import { Content } from "./Content"
import { TableCell } from "./TableCell"

export class TableRow extends Content<TableCell> {
	readonly class: string = "Block.TableRow"
	constructor(content: TableCell[], region?: Error.Region) {
		super(content, region)
	}
}
