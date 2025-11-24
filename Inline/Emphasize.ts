import { mendly } from "mendly"
import { Node, register } from "../Node"
import { Content } from "./Content"
import { Inline } from "./Inline"

export class Emphasize extends Content {
	readonly class: string = "inline.emphasize"
	constructor(content: Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return "_" + super.toString() + "_"
	}
}

export namespace Emphasize {}

register("inline.emphasize", data => new Emphasize(data.content.map(Node.create)))
