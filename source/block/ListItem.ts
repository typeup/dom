import { Error } from "@cogneco/mend"
import { Block } from "./Block"
import { ContentBlock } from "./ContentBlock"

export class ListItem extends ContentBlock<Block> {
	readonly class: string = "ListItem"
	constructor(content: Block[], region: Error.Region) {
		super(content, region)
	}
	toString(symbol?: string): string {
		if (!symbol)
			symbol = " - "
		return symbol + super.toString()
	}
}
