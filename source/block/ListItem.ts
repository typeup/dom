import { Error } from "@cogneco/mend"
import { Block } from "./Block"
import { Content } from "./Content"

export class ListItem extends Content<Block> {
	readonly class: string = "Block.ListItem"
	constructor(content: Block[], region?: Error.Region) {
		super(content, region)
	}
	toString(symbol?: string): string {
		if (!symbol)
			symbol = " - "
		return symbol + super.toString()
	}
}
