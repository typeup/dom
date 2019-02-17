import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import { TableRow } from "./TableRow"
import * as inline from "../inline"

export class Table extends ContentBlock<inline.Inline> {
	readonly class: string = "Block.Table"
	constructor(readonly alignments: ("" | "left" | "center" | "right")[], readonly rows: TableRow[], content: inline.Inline[], region?: Error.Region) {
		super(content, region)
	}
}
