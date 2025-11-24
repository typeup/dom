import { dom } from "../index"

describe("math", () => {
	const node = new dom.Inline.Math("x^2")
	it("create", () => expect(dom.Node.create({ class: "math", value: "x^2" })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("math")
		expect(node.value).toBe("x^2")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "math",
			value: "x^2",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("$x^2$")
	})
})
