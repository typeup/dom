import { Error } from "@cogneco/mend"
import { Content } from "./Content"
import * as inline from "../inline"

export class Video extends Content<inline.Inline> {
	readonly class: string = "Block.Video"
	get type(): string {
		let result: string | undefined
		const match = this.source.match(/\.([a-z,A-Z,0-9]+)$/)
		if (match && match.length > 1)
			switch (match[1]) {
				case "ogg":
					result = "video/ogg"
					break
				case "mp4":
					result = "video/mp4"
					break
				default:
					break
			}
		return result || ""
	}
	constructor(readonly source: string, readonly classes: string[], content: inline.Inline[], region?: Error.Region) {
		super(content, region)
	}
	toObject(): { class: string } | any {
		return {
			...super.toObject(),
			classes: this.classes,
			source: this.source,
		}
	}
	toString() {
		return `!video ${this.source} ${this.classes}\n${super.toString()}`
	}
}