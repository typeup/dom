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
	override dehydrate(): { class: Class } | any {
		return {
			...super.dehydrate(),
			source: this.source.toString(),
			content: typeof this.content === "string" ? this.content : this.content?.dehydrate()
		}
	}
}

export namespace Import {}

register("block.import", data => {
	const hydratedContent = data.content && Node.hydrate(data.content)
	const content =
		typeof data.content === "string" ? data.content : hydratedContent instanceof File ? hydratedContent : undefined
	return new Import(mendly.Uri.parse(data.source) ?? mendly.Uri.empty, content)
})
