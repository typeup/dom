import { mendly } from "mendly"
import { register } from "../Node"
import { Variables } from "../Variables"
import { Block } from "./Block"

export class Assignment extends Block {
	readonly class: string = "block.assignment"
	override get variables(): Variables {
		return { [this.name]: this.value }
	}
	constructor(readonly name: string, readonly value: string, region?: mendly.Error.Region) {
		super(region)
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			name: this.name,
			value: this.value,
		}
	}
	override toString() {
		return this.name + " = " + this.value + "\n"
	}
}

export namespace Assignment {}

register("block.assignment", data => new Assignment(data.name, data.value))
