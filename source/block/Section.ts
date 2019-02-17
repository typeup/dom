import { Error } from "@cogneco/mend"
import { Block } from "./Block"
import { ContentBlock } from "./ContentBlock"

export class Section extends ContentBlock<Block> {
	readonly class: string = "Block.Section"
	constructor(content: Block[], region?: Error.Region) {
		super(content, region)
	}
	toString() {
		return `---\n${super.toString()}`
	}
}
