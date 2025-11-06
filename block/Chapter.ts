import { Error } from "@cogneco/mend";
import { Node, register } from "../Node";
import { Block } from "./Block";
import { Content } from "./Content";

export class Chapter extends Content<Block> {
	readonly class: string = "Block.Chapter";
	constructor(content: Block[], region?: Error.Region) {
		super(content, region);
	}
	override toString() {
		return `===\n${super.toString()}`;
	}
}
register("Block.Chapter", (data) => new Chapter(data.content.map(Node.create)));
