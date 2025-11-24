import { mendly } from "mendly"
import { Node } from "../Node"
import { Block } from "./Block"

export abstract class Content<T extends Node> extends Block {
	constructor(readonly content: T[], region?: mendly.Error.Region) {
		super(
			region ?? content.map(c => c.region).reduce((left, right) => (left && right ? left.merge(right) : left || right))
		)
	}
	override toString(): string {
		return this.content.map(c => c.toString()).join("")
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			content: this.content.map(c => c.toObject()),
		}
	}
}

export namespace Content {}
