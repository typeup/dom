import { Error } from "@cogneco/mend";
import { Node, register } from "../Node";
import { Content } from "./Content";
import * as inline from "../inline";

export class Heading extends Content<inline.Inline> {
	readonly class: string = "Block.Heading";
	constructor(
		readonly level: number,
		content: inline.Inline[],
		region?: Error.Region
	) {
		super(content, region);
	}
	override toString(): string {
		return "#".repeat(this.level) + " " + super.toString();
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			level: this.level,
		};
	}
}
register(
	"Block.Heading",
	(data) => new Heading(data.level, data.content.map(Node.create))
);
