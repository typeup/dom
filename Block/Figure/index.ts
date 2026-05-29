import { mendly } from "mendly"
import { Class } from "../../Class/index.js"
import { Inline } from "../../Inline/index.js"
import { Node, register } from "../../Node/index.js"
import { Content } from "../Content.js"

export class Figure extends Content<Inline> {
	readonly class: Class = "block.figure"
	constructor(
		readonly source: mendly.Uri,
		readonly classes: string[],
		content: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		return `!figure ${this.source} ${this.classes}\n${super.toString()}`
	}
	override dehydrate(): { class: Class } | any {
		return { ...super.dehydrate(), classes: this.classes, source: this.source.toString() }
	}
}

export namespace Figure {}

register(
	"block.figure",
	data => new Figure(mendly.Uri.parse(data.source) ?? mendly.Uri.empty, data.classes, data.content.map(Node.hydrate))
)
