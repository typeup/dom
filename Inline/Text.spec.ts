import { dom } from "../index"

describe("Inline.Text", () => {
	const node = new dom.Inline.Text("value")
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
