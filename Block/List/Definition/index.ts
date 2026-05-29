import { Class } from "../../../Class/index.js"
import { Node, register } from "../../../Node/index.js"
import { Content } from "../../Content.js"
import { Data as _Data } from "./Data.js"
import { Term as _Term } from "./Term.js"

export class Definition extends Content<Definition.Term> {
	readonly class: Class = "block.list.definition"
	constructor(content: Definition.Term[]) {
		super(content)
	}
	override toString(): string {
		return this.content.map(item => item.toString()).join("\n")
	}
}

export namespace Definition {
	export import Data = _Data
	export import Term = _Term
}

register("block.list.definition", data => new Definition(data.content.map(Node.hydrate)))
