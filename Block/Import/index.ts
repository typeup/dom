import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { File } from "../../File/index.js"
import { Node, register } from "../../Node/index.js"
import { Block } from "../Block.js"

export class Import extends Block {
	readonly class: Class = "block.import"
	constructor(
		readonly source: mendly.Uri,
		readonly content: File | string | undefined,
		region?: mendly.Error.Region
	) {
		super(region)
	}
	override toString(): string {
		return `!import ${this.source}\n`
	}
	override toObject(): { class: Class } | any {
		return {
			...super.toObject(),
			source: this.source.toString(),
			content: typeof this.content === "string" ? this.content : this.content?.toObject()
		}
	}
}

export namespace Import {}

register("block.import", data => new Import(data.source, Node.create(data.content) as File | string | undefined))
