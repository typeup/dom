import { mendly } from "mendly"
import { Class } from "../../Class"
import { Node, register } from "../../Node"
import { Content } from "../Content"
import { Inline } from "../Inline"

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
register("inline.quote", data => new Quote(data.content.map(Node.create)))
