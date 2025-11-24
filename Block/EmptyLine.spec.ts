import { dom } from "../index"

describe("block.EmptyLine", () => {
	const node = new dom.Block.EmptyLine()
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () => expect(dom.Node.create({ class: "block.emptyLine" })).toEqual(node))
	it("class", () => expect(node.class).toBe("block.emptyLine"))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			class: "block.emptyLine",
		}))
	it("toString", () => expect(node.toString()).toEqual("\n"))
})
