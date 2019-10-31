import { Error } from "@cogneco/mend"
import * as inline from "../inline"
import { Content } from "./Content"

export class DefinitionData extends Content<inline.Inline> {
	readonly class: string = "Block.DefinitionData"
	constructor(content: inline.Inline[], region?: Error.Region) {
		super(content, region)
	}
	toString(): string {
		return ": " + super.toString()
	}
}
