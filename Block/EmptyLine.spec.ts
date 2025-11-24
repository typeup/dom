import { dom } from "../index"

describe("block.EmptyLine", () => {
	const node = new dom.Block.EmptyLine()
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () => expect(dom.Node.create({ class: "Block.EmptyLine" })).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.EmptyLine"))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			class: "Block.EmptyLine",
		}))
	it("toString", () => expect(node.toString()).toEqual("\n"))
})
