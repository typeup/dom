import { mendly } from "mendly";
import { Node, register } from "../Node";
import { Content } from "./Content";
import * as inline from "../inline";

export class Video extends Content<inline.Inline> {
	readonly class: string = "Block.Video";
	get type(): string {
		let result: string | undefined;
		if (this.source.extension)
			switch (this.source.extension) {
				case "ogg":
					result = "video/ogg";
					break;
				case "mp4":
					result = "video/mp4";
					break;
				default:
					break;
			}
		return result || "";
	}
	constructor(
		readonly source: mendly.Uri,
		readonly classes: string[],
		content: inline.Inline[],
		region?: mendly.Error.Region
	) {
		super(content, region);
	}
	override toString(): string {
		return `!video ${this.source} ${this.classes}\n${super.toString()}`;
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			classes: this.classes,
			source: this.source.toString(),
		};
	}
}
register(
	"Block.Video",
	(data) => new Video(data.source, data.classes, data.content.map(Node.create))
);
