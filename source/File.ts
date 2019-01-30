import { Error } from "@cogneco/mend"

import { Node } from "./Node"
import { Block, Paragraph } from "./block"

export class File extends Node {
	readonly class: string = "File"
	constructor(readonly content: Block[], region: Error.Region) {
		super(region)
	}
	toObject(): { class: string } | any {
		return { ...super.toObject(), content: this.content.map(element => element.toObject()) }
	}
	toString(): string {
		let result = ""
		let wasParagraph = false
		for (const c of this.content) {
			const isParagraph = c instanceof Paragraph
			if (isParagraph && wasParagraph)
				result += "\n"
			result += c.toString()
			wasParagraph = isParagraph
		}
		return result
	}
}
