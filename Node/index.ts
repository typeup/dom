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
	static hydrate<K extends Class>(data: { class: K } & any): Class.Types[K] | undefined {
		const creator = creators[data.class as keyof typeof creators]
		return creator?.(data) as Class.Types[K] | undefined
	}
	static split<C extends Class>(
		nodes: (Node | undefined)[],
		...classes: C[]
	): { [K in C | "other"]?: Class.Types[K][] } {
		const result: ReturnType<typeof this.split> = {}
		for (const node of nodes)
			if (node) (result[classes.includes(node.class as C) ? node.class : "other"] ??= []).push(node)
		return result
	}
}
export namespace Node {}

export type Hydrator<K extends Class = Class> = (data: { class: K } & any) => Class.Types[K]
const creators: { [name in Class]?: Hydrator } = {}
export function register<K extends Class>(name: K, creator: Hydrator<K>) {
	creators[name] = creator as Hydrator
}
