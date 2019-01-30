import * as inline from "."

const node = new inline.Text("value")

describe("Text", () => {
	it("properties", () => {
		expect(node.class).toBe("Text")
		expect(node.value).toBe("value")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Text",
			value: "value",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("value")
	})
})
