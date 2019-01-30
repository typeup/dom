import { Error } from "@cogneco/mend"
import { Block } from "./Block"

export class EmptyLine extends Block {
	readonly class: string = "EmptyLine"
	constructor(region: Error.Region) {
		super(region)
	}
	toString(): string {
		return "\n"
	}
}
