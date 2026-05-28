import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"
import { Inline } from "../Inline.js"
import { Flag as _Flag } from "./Flag.js"

export class Link extends Content {
	readonly class: Class = "inline.link"
	constructor(
		readonly target: string,
		content: Inline[],
		readonly flags: Link.Flag[] = [],
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
export namespace Link {
	export import Flag = _Flag
}

register("inline.link", data => new Link(data.target, data.content.map(Node.create), data.flags ?? []))
