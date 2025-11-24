import { mendly } from "mendly"
import { Content } from "./Content"
import * as inline from "../Inline"
import { Node, register } from "../Node"

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

export namespace TableCell {}

register("Block.TableCell", data => new TableCell(data.header, data.content.map(Node.create)))
