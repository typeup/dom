import { mendly } from "mendly";
import { Node, register } from "../Node";
import { File } from "../File";
import { Block } from "./Block";

export class Import extends Block {
	readonly class: string = "Block.Import";
	constructor(
		readonly source: mendly.Uri,
		readonly content: File,
		region?: mendly.Error.Region
	) {
		super(region);
	}
	override toString(): string {
		return `!import ${this.source}\n`;
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			source: this.source.toString(),
			content: this.content.toObject(),
		};
	}
}
register(
	"Block.Import",
	(data) => new Import(data.source, Node.create(data.content) as File)
);
