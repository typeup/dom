import * as inline from "."

const node = new inline.Emphasize([new inline.Text("TypeUp")])

describe("Inline.Emphasize", () => {
	it("properties", () => {
		expect(node.class).toBe("Inline.Emphasize")
		expect(node.content).toEqual([new inline.Text("TypeUp")])
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Inline.Emphasize",
			content: [{ class: "Inline.Text", value: "TypeUp" }],
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("_TypeUp_")
	})
})
