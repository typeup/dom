import { mendly } from "mendly"
import { Block } from "../Block/index.js"
import { Class } from "../Class/index.js"
import { File } from "../File/index.js"
import { register } from "../Node/index.js"

export class Document extends File {
	override readonly class: Class = "document"
	constructor(content: Block[], region?: mendly.Error.Region) {
		super(content, region)
	}
}

export namespace Document {}

register("document", data => new Document(data.content))
