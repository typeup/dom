import { dom } from "../../index.js"

describe("dom.Block.EmptyLine", () => {
	const node = new dom.Block.EmptyLine()
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () => expect(dom.Node.hydrate({ class: "block.emptyLine" })).toEqual(node))
	it("class", () => expect(node.class).toBe("block.emptyLine"))
	it("toObject", () => expect(node.dehydrate()).toEqual({ class: "block.emptyLine" }))
	it("toString", () => expect(node.toString()).toEqual("\n"))
})
