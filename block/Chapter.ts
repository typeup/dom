import { Error } from "@cogneco/mend"
import { Block } from "./Block"
import { Content } from "./Content"

export class Chapter extends Content<Block> {
	readonly class: string = "Block.Chapter"
	constructor(content: Block[], region?: Error.Region) {
		super(content, region)
	}
	toString() {
		return `===\n${super.toString()}`
	}
}
