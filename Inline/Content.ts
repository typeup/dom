import { mendly } from "mendly"
import { Class } from "../Class"
import { Inline } from "./Inline"

export abstract class Content extends Inline {
	constructor(readonly content: Inline[], region?: mendly.Error.Region) {
		super(region)
	}
	override toString(): string {
		return this.content.map(c => c.toString()).join("")
	}
	override toObject(): { class: Class } | any {
		return {
			...super.toObject(),
			content: this.content.map(c => c.toObject()),
		}
	}
}

export namespace Content {}
