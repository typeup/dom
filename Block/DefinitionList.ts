import { Node, register } from "../Node"
import { Content } from "./Content"
import { DefinitionTerm } from "./DefinitionTerm"

export class DefinitionList extends Content<DefinitionTerm> {
	readonly class: string = "Block.DefinitionList"
	constructor(content: DefinitionTerm[]) {
		super(content)
	}
	override toString(): string {
		return this.content.map(item => item.toString()).join("\n")
	}
}

export namespace DefinitionList {}

register("Block.DefinitionList", data => new DefinitionList(data.content.map(Node.create)))
