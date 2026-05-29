import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import { Block } from "../Block.js"
import { Content } from "../Content.js"

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
	override dehydrate(): { class: Class } | any {
		return {
			...super.dehydrate(),
			...(this.cite !== undefined && { cite: this.cite }),
			...(this.attribution?.length && { attribution: this.attribution.map(a => a.dehydrate()) })
		}
	}
}

export namespace Quote {}

register(
	"block.quote",
	data => new Quote(data.content.map(Node.hydrate), data.cite, data.attribution?.map(Node.hydrate))
)
