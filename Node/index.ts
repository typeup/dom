import { mendly } from "mendly"
import { Class } from "../Class"
import { Variables } from "../Variables"

export abstract class Node {
	abstract readonly class: Class
	get variables(): Variables {
		return {}
	}
	protected constructor(readonly region?: mendly.Error.Region) {}
	toObject(): { class: Class } & any {
		return { class: this.class }
	}
	toJson(indent: string = ""): string {
		return JSON.stringify(this.toObject(), null, indent)
	}
	static create<K extends Class>(data: { class: K } & any): Class.Types[K] | undefined {
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

export type Creator<K extends Class = Class> = (data: { class: K } & any) => Class.Types[K]
const creators: { [name in Class]?: Creator } = {}
export function register<K extends Class>(name: K, creator: Creator<K>) {
	creators[name] = creator as Creator
}
