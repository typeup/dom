import { mendly } from "mendly"
import { Class } from "../Class/index.js"
import { Inline } from "./Inline.js"

export abstract class Content extends Inline {
	constructor(
		readonly content: Inline[],
		region?: mendly.Error.Region
	) {
		super(region)
	}
	override toString(): string {
		return this.content.map(c => c.toString()).join("")
	}
	override dehydrate(): { class: Class } | any {
		return { ...super.dehydrate(), content: this.content.map(c => c.dehydrate()) }
	}
}

export namespace Content {}
