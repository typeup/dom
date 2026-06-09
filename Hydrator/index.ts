import { Class } from "../Class/index.js"

export type Hydrator<K extends Class = Class> = (data: { class: K } & any) => Class.Types[K]
const hydrators: { [name in Class]?: Hydrator } = {}
export namespace Hydrator {
	export function register<K extends Class>(name: K, hydrator: Hydrator<K>) {
		hydrators[name] = hydrator as Hydrator
	}
	export function hydrate<K extends Class>(data: { class: K } & any): Class.Types[K] | undefined {
		const hydrator = hydrators[data.class as keyof typeof hydrators]
		return hydrator?.(data) as Class.Types[K] | undefined
	}
}
