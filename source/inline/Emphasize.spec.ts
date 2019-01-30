import * as inline from "."

const node = new inline.Emphasize([ new inline.Text("TypeUp") ])

describe("Emphasize", () => {
	it("properties", () => {
		expect(node.class).toBe("Emphasize")
		expect(node.content).toEqual([ new inline.Text("TypeUp") ])
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Emphasize",
			content: [
				{ class: "Text", value: "TypeUp" },
			],
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("_TypeUp_")
	})
})
