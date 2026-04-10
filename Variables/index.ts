export interface Variables {
	[name: string]: Variables.Value
}

export namespace Variables {
	export type Value = Variables | string | number | boolean | undefined | Value[]
	export type Types = {
		integer: number
		float: number
		boolean: boolean
		string: string
		"string[]": string[]
	}
	export function merge(...variables: Variables[]): Variables {
		return variables.reduce((result, variables) => {
			for (const key in variables) {
				const value = variables[key]
				result[key] =
					typeof value == "object" && value != undefined && !Array.isArray(value) && typeof result[key] == "object"
						? merge(result[key] as Variables, value as Variables)
						: value
			}
			return result
		}, {})
	}
	export function split(variables: Variables, ...keys: (string | string[])[]): [Variables, Variables] {
		const result: [Variables, Variables] = [{}, {}]
		for (const key in variables)
			if (variables[key])
				result[keys.includes(key) ? 0 : 1][key] = variables[key]
		return result
	}
	export function set(variables: Variables, value: Value, ...[head, ...tail]: string[]): Variables {
		return !head
			? variables
			: { ...variables, [head]: tail.length ? set((variables[head] as Variables) || {}, value, ...tail) : value }
	}
	export function remove(variables: Variables, ...[head, ...tail]: string[]): Variables {
		const result = !head
			? variables
			: tail.length
			? { ...variables, [head]: remove(variables[head] as Variables, ...tail) }
			: Object.fromEntries(Object.entries(variables).filter(([key]) => key != head))
		return result
	}
	export function get(variables: Variables, ...[head, ...tail]: string[]): Value | undefined {
		return !head ? undefined : tail.length ? get(variables[head] as Variables, ...tail) : variables[head]
	}
	export function* keys(variables: Variables, prefix: string[] = []): Generator<string[]> {
		for (const key in variables) {
			const path = [...prefix, key]
			const value = variables[key]
			if (typeof value == "object" && value != undefined && !Array.isArray(value))
				yield* keys(value, path)
			else
				yield path
		}
	}
	export function* values(variables: Variables): Generator<Value> {
		for (const key in variables) {
			const value = variables[key]
			if (typeof value == "object" && value != undefined && !Array.isArray(value))
				yield* values(value)
			else
				yield value
		}
	}
	export function* entries(variables: Variables, prefix: string[] = []): Generator<[string[], Value]> {
		for (const key in variables) {
			const path = [...prefix, key]
			const value = variables[key]
			if (typeof value == "object" && value != undefined && !Array.isArray(value))
				yield* entries(value, path)
			else
				yield [path, value]
		}
	}
	export function from(entries: Iterable<[string[], Value]>): Variables {
		let result: Variables = {}
		for (const [path, value] of entries)
			result = set(result, value, ...path)
		return result
	}
	export function deepen(variables: Variables): Variables {
		return Object.keys(variables).reduce((result, key) => set(result, variables[key], ...key.split(".")), {})
	}
	export function flatten(variables: Variables, prefix = ""): Variables {
		return Object.keys(variables).reduce((result, key) => {
			const path = prefix ? `${prefix}.${key}` : key
			const value = variables[key]
			return typeof value == "object" && value != undefined && !Array.isArray(value)
				? { ...result, ...flatten(value as Variables, path) }
				: { ...result, [path]: value }
		}, {})
	}
	export function reduce<T>(
		variables: Variables,
		reducer: (result: T, value: Value, path: string[]) => T,
		start: T,
		prefix: string[] = []
	): T {
		return Object.keys(variables).reduce((result, key) => {
			const value = variables[key]
			const path = [...prefix, key]
			return typeof value == "object" && value != undefined && !Array.isArray(value)
				? reduce(value, reducer, result, path)
				: reducer(result, value, path)
		}, start)
	}
	export function map(
		variables: Variables,
		mapper: (value: Value, path: string[]) => Value,
		prefix: string[] = []
	): Variables {
		return Object.keys(variables).reduce((result, key) => {
			const value = variables[key]
			const path = [...prefix, key]
			return typeof value == "object" && value != undefined && !Array.isArray(value)
				? { ...result, [key]: map(value as Variables, mapper, path) }
				: { ...result, [key]: mapper(value, path) }
		}, {})
	}
	export function parse<T extends keyof Types>(variables: Variables, type: T, ...path: string[]): Types[T] | undefined {
		const value = get(variables, ...path)
		let result: Types[T] | undefined
		switch (type) {
			case "string[]":
				result =
					typeof value == "string"
						? (value.split(value.includes(",") ? "," : " ").map(string => string.trim()) as Types[T])
						: Array.isArray(value) && value.every(item => typeof item == "string")
						? (value as Types[T])
						: undefined
				break
			case "integer":
				{
					const parsed = typeof value == "number" ? value : typeof value == "string" ? parseInt(value, 10) : undefined
					result = parsed != undefined && Number.isInteger(parsed) ? (parsed as Types[T]) : undefined
				}
				break
			case "float":
				{
					const parsed = typeof value == "number" ? value : typeof value == "string" ? parseFloat(value) : undefined
					result = parsed != undefined && !isNaN(parsed) ? (parsed as Types[T]) : undefined
				}
				break
			case "boolean":
				result =
					typeof value == "boolean"
						? (value as Types[T])
						: typeof value == "string"
						? value.toLowerCase() == "true"
							? (true as Types[T])
							: value.toLowerCase() == "false"
							? (false as Types[T])
							: undefined
						: undefined
				break
			case "string":
				switch (typeof value) {
					case "string":
						result = value as Types[T]
						break
					case "number":
					case "boolean":
						result = String(value) as Types[T]
						break
					default:
						result = undefined
				}
				break
		}
		return result
	}
}
