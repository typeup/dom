import { Error } from "@cogneco/mend";
import { register } from "../Node";
import { Block } from "./Block";

export class EmptyLine extends Block {
	readonly class: string = "Block.EmptyLine";
	constructor(region?: Error.Region) {
		super(region);
	}
	override toString(): string {
		return "\n";
	}
}
register("Block.EmptyLine", (data) => new EmptyLine(data.region));
