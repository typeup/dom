import { Error } from "@cogneco/mend"
import { ContentInline } from "./ContentInline"
import { Inline } from "./Inline"

export class Emphasize extends ContentInline {
	readonly class: string = "Inline.Emphasize"
	constructor(content: Inline[], region?: Error.Region) {
		super(content, region)
	}
	toString(): string {
		return "_" + super.toString() + "_"
	}
}
