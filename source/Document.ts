import { Error } from "@cogneco/mend"
import { File } from "./File"
import { Block } from "./block"

export class Document extends File {
	readonly class: string = "Document"
	constructor(content: Block[], region: Error.Region) {
		super(content, region)
	}
	toJson(indent?: string): string {
		if (!indent)
			indent = ""
		return JSON.stringify(this.toObject(), null, indent)
	}
}
