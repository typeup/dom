import { dom } from "../index"

describe("Math", () => {
	const node = new dom.Inline.Math("x^2")
	it("create", () => expect(dom.Node.create({ class: "Math", value: "x^2" })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("Math")
		expect(node.value).toBe("x^2")
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Math",
			value: "x^2",
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("$x^2$")
	})
})
