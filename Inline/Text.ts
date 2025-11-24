import { mendly } from "mendly"
import { register } from "../Node"
import { Inline } from "./Inline"

export class Text extends Inline {
	readonly class: string = "Text"
	constructor(readonly value: string, region?: mendly.Error.Region) {
		super(region)
	}
	override toObject(): { class: string } | any {
		return { ...super.toObject(), value: this.value }
	}
	override toString(): string {
		return this.value
	}
}

export namespace Text {}

register("Text", data => new Text(data.value))
