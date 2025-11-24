import { dom } from "../index"

describe("Inline.Math", () => {
	const node = new dom.Inline.Math("x^2")
	it("create", () => expect(dom.Node.create({ class: "Inline.Math", value: "x^2" })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("Inline.Math")
		expect(node.value).toBe("x^2")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Inline.Math",
			value: "x^2",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("$x^2$")
	})
})
