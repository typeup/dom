import { mendly } from "mendly"
import { Inline } from "../Inline"
import { Node, register } from "../Node"
import { Content } from "./Content"

export class Video extends Content<Inline> {
	readonly class: string = "Block.Video"
	get type(): string {
		let result: string | undefined
		if (this.source.extension)
			switch (this.source.extension) {
				case "ogg":
					result = "video/ogg"
					break
				case "mp4":
					result = "video/mp4"
					break
			}
		return result || ""
	}
	constructor(
		readonly source: mendly.Uri,
		readonly classes: string[],
		content: Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region)
	}
	override toString(): string {
		return `!video ${this.source} ${this.classes}\n${super.toString()}`
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			classes: this.classes,
			source: this.source.toString(),
		}
	}
}

export namespace Video {}

register("Block.Video", data => new Video(data.source, data.classes, data.content.map(Node.create)))
