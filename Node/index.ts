import { mendly } from "mendly"
import { Class } from "../Class/index.js"
import { Variables } from "../Variables/index.js"

export abstract class Node {
	abstract readonly class: Class
	get variables(): Variables {
		return {}
	}
	protected constructor(readonly region?: mendly.Error.Region) {}
	is<C extends Class>(type: C): this is Class.Types[C] {
		return (
			this.class == type
			|| (type == "block" && this.class.startsWith("block."))
			|| (type == "inline" && this.class.startsWith("inline."))
			|| (type == "file" && this.class == "document")
			|| type == "other"
		)
	}
	dehydrate(): { class: Class } & any {
		return { class: this.class }
	}
	toJSON(): { class: Class } & any {
		return this.dehydrate()
	}
}
export namespace Node {}
