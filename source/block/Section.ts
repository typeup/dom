import { Error } from "@cogneco/mend"
import { Block } from "./Block"
import { Content } from "./Content"

export class Section extends Content<Block> {
	readonly class: string = "Block.Section"
	constructor(content: Block[], region?: Error.Region) {
		super(content, region)
	}
	toString() {
		return `---\n${super.toString()}`
	}
}
