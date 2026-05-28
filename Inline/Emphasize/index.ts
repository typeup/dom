import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"
import { Inline } from "../Inline.js"

export class Emphasize extends Content {
	readonly class: Class = "inline.emphasize"
	constructor(content: Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return "_" + super.toString() + "_"
	}
}

export namespace Emphasize {}

register("inline.emphasize", data => new Emphasize(data.content.map(Node.create)))
