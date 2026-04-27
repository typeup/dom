import { mendly } from "mendly"
import { Class } from "../Class"
import { Node } from "../Node"
import { Variables } from "../Variables"
import { Block } from "./Block"

export abstract class Content<T extends Node> extends Block {
	override get variables(): Variables {
		return Variables.merge(...this.content.map(b => b.variables))
	}
	constructor(
		readonly content: T[],
		region?: mendly.Error.Region
	) {
		super(
			region ?? content.map(c => c.region).reduce((left, right) => (left && right ? left.merge(right) : left || right))
		)
	}
	override toString(): string {
		return this.content.map(c => c.toString()).join("")
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), content: this.content.map(c => c.toObject()) }
	}
}

export namespace Content {}
