import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { register } from "../../Node/index.js"
import { Variables } from "../../Variables/index.js"
import { Block } from "../Block.js"

export class Assignment extends Block {
	readonly class: Class = "block.assignment"
	override get variables(): Variables {
		return { [this.name]: this.value }
	}
	constructor(
		readonly name: string,
		readonly value: string,
		region?: mendly.Error.Region
	) {
		super(region)
	}
	override dehydrate(): { class: Class } | any {
		return { ...super.dehydrate(), name: this.name, value: this.value }
	}
	override toString() {
		return this.name + " = " + this.value + "\n"
	}
}

export namespace Assignment {}

register("block.assignment", data => new Assignment(data.name, data.value))
