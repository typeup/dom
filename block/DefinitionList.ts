import { Content } from "./Content"
import { DefinitionTerm } from "./DefinitionTerm"

export class DefinitionList extends Content<DefinitionTerm> {
	readonly class: string = "Block.DefinitionList"
	constructor(content: DefinitionTerm[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left && right ? left.merge(right) : left || right))
	}
	toString() {
		return this.content.map(item => item.toString()).join("\n")
	}
}
