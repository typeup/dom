import { Error } from "@cogneco/mend";
import { Node, register } from "../Node";
import { Block } from "./Block";

export class Assignment extends Block {
	readonly class: string = "Block.Assignment";
	constructor(
		readonly name: string,
		readonly value: string,
		region?: Error.Region
	) {
		super(region);
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			name: this.name,
			value: this.value,
		};
	}
	override toString() {
		return this.name + " = " + this.value + "\n";
	}
}
register("Block.Assignment", (data) => new Assignment(data.name, data.value));
