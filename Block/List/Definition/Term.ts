import { mendly } from "mendly"
import { Inline } from "../../../Inline"
import { Node, register } from "../../../Node"
import { Content } from "../../Content"
import { Data } from "./Data"

export class Term extends Content<Inline> {
	readonly class: string = "block.list.definition.term"
	constructor(content: Inline[], readonly data: Data[], region?: mendly.Error.Region) {
		super(content, region)
	}
	override toString(): string {
		return super.toString() + "\n" + this.data.map(d => d.toString()).join("\n")
	}
	override toObject(): { class: string } | any {
		return { ...super.toObject(), data: this.data.map(d => d.toObject()) }
	}
}

export namespace Term {}

register("block.list.definition.term", data => new Term(data.content.map(Node.create), data.data.map(Node.create)))
