import { dom } from "../../index.js"

describe("dom.Block.Assignment", () => {
	const node = new dom.Block.Assignment("variable", "value")
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(dom.Node.hydrate({ class: "block.assignment", name: "variable", value: "value" })).toEqual(node))
	it("class", () => expect(node.class).toBe("block.assignment"))
	it("name", () => expect(node.name).toBe("variable"))
	it("value", () => expect(node.value).toBe("value"))
	it("toObject", () =>
		expect(node.dehydrate()).toEqual({ name: "variable", value: "value", class: "block.assignment" }))
	it("toString", () => expect(node.toString()).toEqual("variable = value\n"))
})
