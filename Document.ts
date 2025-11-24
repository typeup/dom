import { mendly } from "mendly"
import { Block } from "./Block"
import { File } from "./File"
import { register } from "./Node"

export class Document extends File {
	override readonly class: string = "Document"
	constructor(content: Block[], region?: mendly.Error.Region) {
		super(content, region)
	}
	toJson(indent?: string): string {
		if (!indent)
			indent = ""
		return JSON.stringify(this.toObject(), null, indent)
	}
}

export namespace Document {}

register("Document", data => new Document(data.content))
