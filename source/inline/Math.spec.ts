import * as inline from "."

const node = new inline.Math("x^2")

describe("Math", () => {
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
