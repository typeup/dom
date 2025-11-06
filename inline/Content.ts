import { Error } from "@cogneco/mend";
import { Inline } from "./Inline";

export abstract class Content extends Inline {
	constructor(readonly content: Inline[], region?: Error.Region) {
		super(region);
	}
	override toString(): string {
		return this.content.map((c) => c.toString()).join("");
	}
	override toObject(): { class: string } | any {
		return {
			...super.toObject(),
			content: this.content.map((c) => c.toObject()),
		};
	}
}
