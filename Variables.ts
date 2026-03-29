export interface Variables {
	[name: string]: Variables.Value
}

export namespace Variables {
	export type Value = string
	export function merge(...variables: Variables[]): Variables {
		return Object.assign({}, ...variables)
	}
}
