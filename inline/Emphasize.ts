import { Error } from "@cogneco/mend"
import { Node, register } from "../Node"
import { Content } from "./Content"
import { Inline } from "./Inline"

export class Emphasize extends Content {
	readonly class: string = "Inline.Emphasize"
	constructor(content: Inline[], region?: Error.Region) {
		super(content, region)
	}
	toString(): string {
		return "_" + super.toString() + "_"
	}
}
register("Inline.Empasize", data => new Emphasize(data.content.map(Node.create)))
