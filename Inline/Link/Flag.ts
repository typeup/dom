export type Flag = (typeof Flag.values)[number]

export namespace Flag {
	export const values = ["blank", "download"] as const
}
