export type Flag = (typeof Flag.values)[number]

export namespace Flag {
	export const values = ["blank", "download"] as const
	export function is(value: unknown | Flag): value is Flag {
		return typeof value === "string" && values.includes(value as Flag)
	}
}
