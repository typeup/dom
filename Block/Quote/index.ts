import { mendly } from "mendly"
import { Class } from "../../Class"
import { Inline } from "../../Inline"
import { Node, register } from "../../Node"
import { Block } from "../Block"
import { Content } from "../Content"

export class Quote extends Content<Block> {
	readonly class: Class = "block.quote"
	constructor(
		content: Block[],
		readonly cite?: string,
		readonly attribution?: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		return (
			`"""\n${super.toString()}\n"""`
			+ (this.cite ? ` ${this.cite}` : "")
			+ (this.attribution?.length ? `\n${this.attribution.map(a => a.toString()).join("")}` : "")
		)
	}
	override toObject(): { class: Class } | any {
		return {
			...super.toObject(),
			...(this.cite !== undefined && { cite: this.cite }),
			...(this.attribution?.length && { attribution: this.attribution.map(a => a.toObject()) })
		}
	}
}

export namespace Quote {}

register("block.quote", data => new Quote(data.content.map(Node.create), data.cite, data.attribution?.map(Node.create)))
