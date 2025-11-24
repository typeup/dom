import * as dom from "../index"

describe("block.Assignment", () => {
	const node = new dom.block.Assignment("variable", "value")
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Assignment"))
	it("name", () => expect(node.name).toBe("variable"))
	it("value", () => expect(node.value).toBe("value"))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			name: "variable",
			value: "value",
			class: "Block.Assignment",
		}))
	it("toString", () => expect(node.toString()).toEqual("variable = value\n"))
})
