import { dom } from "../../index.js"

describe("dom.Inline.Math", () => {
	const node = new dom.Inline.Math("x^2")
	it("create", () => expect(dom.Node.hydrate({ class: "inline.math", value: "x^2" })).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("inline.math")
		expect(node.value).toBe("x^2")
	})
	it("toObject", () => {
		expect(node.dehydrate()).toEqual({ class: "inline.math", value: "x^2" })
	})
	it("toString", () => {
		expect(node.toString()).toEqual("$x^2$")
	})
})
