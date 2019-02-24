import * as inline from "."

const node = new inline.Text("value")

describe("Inline.Text", () => {
	it("properties", () => {
		expect(node.class).toBe("Inline.Text")
		expect(node.value).toBe("value")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Inline.Text",
			value: "value",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("value")
	})
})
