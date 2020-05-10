import { Error } from "@cogneco/mend"
import { Node, register } from "../Node"
import { Content } from "./Content"
import * as inline from "../inline"

export class TableCell extends Content<inline.Inline> {
	readonly class: string = "Block.TableCell"
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
register("Block.TableCell", data => new TableCell(data.header, data.content.map(Node.create)))
