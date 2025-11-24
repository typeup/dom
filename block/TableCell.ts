import { mendly } from "mendly"
import * as inline from "../inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class TableCell extends Content<inline.Inline> {
	readonly class: string = "Block.TableCell"
	constructor(readonly header: boolean, content: inline.Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			header: this.header,
		}
	}
}
register("Block.TableCell", data => new TableCell(data.header, data.content.map(Node.create)))
