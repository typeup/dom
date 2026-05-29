import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"
import { Inline } from "../Inline.js"

export class Quote extends Content {
	readonly class: Class = "inline.quote"
	constructor(content: Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return `"${super.toString()}"`
	}
}
export namespace Quote {}
register("inline.quote", data => new Quote(data.content.map(Node.hydrate)))
