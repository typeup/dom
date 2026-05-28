import { mendly } from "mendly"
import { Block } from "../Block/index.js"
import { Class } from "../Class/index.js"
import { Node, register } from "../Node/index.js"
import { Variables } from "../Variables/index.js"

export class File extends Node {
	readonly class: Class = "file"
	override get variables(): Variables {
		return Variables.merge(...this.content.map(b => b.variables))
	}
	constructor(
		readonly content: Block[],
		region?: mendly.Error.Region
	) {
		super(region)
	}
	override toObject(): { class: Class } | any {
		return { ...super.toObject(), content: this.content.map(element => element.toObject()) }
	}
	override toString(): string {
		let result = ""
		let wasParagraph = false
		for (const c of this.content) {
			const isParagraph = c instanceof Block.Paragraph
			if (isParagraph && wasParagraph) result += "\n"
			result += c.toString()
			wasParagraph = isParagraph
		}
		return result
	}
}

export namespace File {}

register("file", data => new File(data.content))
