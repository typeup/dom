import { mendly } from "mendly"
import { Class } from "../../Class"
import { Node, register } from "../../Node"
import { Content } from "../Content"
import { Inline } from "../Inline"

export class Link extends Content {
	readonly class: Class = "inline.link"
	constructor(
		readonly target: string,
		content: Inline[],
		readonly flags: string[] = [],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), target: this.target, ...(this.flags.length > 0 && { flags: this.flags }) }
	}
	override toString(): string {
		const flagPart = this.flags.length > 0 ? "|" + this.flags.join("|") : ""
		return "[" + this.target + flagPart + " " + super.toString() + "]"
	}
}

export namespace Link {}

register("inline.link", data => new Link(data.target, data.content.map(Node.create), data.flags ?? []))
