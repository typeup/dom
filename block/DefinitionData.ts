import { Error } from "@cogneco/mend"
import { Node, register } from "../Node"
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
register("Block.DefinitionData", data => new DefinitionData(data.content.map(Node.create)))
