import { Error, Uri } from "@cogneco/mend"
import { File } from "../File"
import { Block } from "./Block"

export class Import extends Block {
	readonly class: string = "Block.Import"
	constructor(readonly source: Uri.Locator, readonly content: File, region?: Error.Region) {
		super(region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			source: this.source.toString(),
			content: this.content.toObject(),
		}
	}
	toString() {
		return `!import ${this.source} \n`
	}
}
