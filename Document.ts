import { Error } from "@cogneco/mend";
import { File } from "./File";
import { register } from "./Node";
import { Block } from "./block";

export class Document extends File {
	override readonly class: string = "Document";
	constructor(content: Block[], region?: Error.Region) {
		super(content, region);
	}
	toJson(indent?: string): string {
		if (!indent) indent = "";
		return JSON.stringify(this.toObject(), null, indent);
	}
}
register("Document", (data) => new Document(data.content));
