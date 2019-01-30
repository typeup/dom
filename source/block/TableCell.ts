import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import * as inline from "../inline"

export class TableCell extends ContentBlock<inline.Inline> {
	readonly class: string = "TableCell"
	constructor(readonly header: boolean, content: inline.Inline[], region?: Error.Region) {
		super(content, region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			header: this.header,
		}
	}
}
