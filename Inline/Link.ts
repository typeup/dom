import { mendly } from "mendly"
import { Node, register } from "../Node"
import { Content } from "./Content"
import { Inline } from "./Inline"

export class Link extends Content {
	readonly class: string = "Inline.Link"
	constructor(readonly target: string, content: Inline[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			target: this.target,
		}
	}
	override toString(): string {
		return "[" + this.target + " " + super.toString() + "]"
	}
}

export namespace Link {}

register("Inline.Link", data => new Link(data.target, data.content.map(Node.create)))
