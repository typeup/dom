import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { File } from "../../File/index.js"
import { Hydrator } from "../../Hydrator/index.js"
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
			content: typeof this.content == "string" ? this.content : this.content?.dehydrate()
		}
	}
}

export namespace Import {}

Hydrator.register("block.import", data => {
	const hydrated = data.content && Hydrator.hydrate(data.content)
	const content = typeof data.content == "string" ? data.content : hydrated instanceof File ? hydrated : undefined
	const source = data.source instanceof mendly.Uri ? data.source : (mendly.Uri.parse(data.source) ?? mendly.Uri.empty)
	return new Import(source, content)
})
