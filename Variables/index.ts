export interface Variables {
	[name: string]: Variables.Value
}

export namespace Variables {
	export type Value = string
	export function merge(...variables: Variables[]): Variables {
		return Object.assign({}, ...variables)
	}
	export function split(variables: Variables, ...keys: string[]): [Variables, Variables] {
		const result: [Variables, Variables] = [{}, {}]
		for (const key in variables)
			if (variables[key])
				result[keys.includes(key) ? 0 : 1][key] = variables[key]
		return result
	}
}
