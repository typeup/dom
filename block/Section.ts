import { mendly } from "mendly";
import { Node, register } from "../Node";
import { Block } from "./Block";
import { Content } from "./Content";

export class Section extends Content<Block> {
	readonly class: string = "Block.Section";
	constructor(content: Block[], region?: mendly.Error.Region) {
		super(content, region);
	}
	override toString(): string {
		return `---\n${super.toString()}`;
	}
}
register("Block.Section", (data) => new Section(data.content.map(Node.create)));
