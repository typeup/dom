import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import { TableCell } from "./TableCell"

export class TableRow extends ContentBlock<TableCell> {
	readonly class: string = "Block.TableRow"
	constructor(content: TableCell[], region?: Error.Region) {
		super(content, region)
	}
}
