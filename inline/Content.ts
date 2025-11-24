import { mendly } from "mendly";
import { Inline } from "./Inline";

export abstract class Content extends Inline {
	constructor(readonly content: Inline[], region?: mendly.Error.Region) {
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
