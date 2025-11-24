import { Node, register } from "../../../Node"
import { Content } from "../../Content"
import { Data as _Data } from "./Data"
import { Term as _Term } from "./Term"

export class Definition extends Content<Definition.Term> {
	readonly class: string = "block.list.definition"
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

register("block.list.definition", data => new Definition(data.content.map(Node.create)))
