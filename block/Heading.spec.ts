import * as dom from "../index"

describe("block.Heading", () => {
	const node = new dom.block.Heading(3, [new dom.inline.Text("Header")])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Heading"))
	it("name", () => expect(node.content).toEqual([new dom.inline.Text("Header")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			level: 3,
			content: [{ value: "Header", class: "Inline.Text" }],
			class: "Block.Heading",
		}))
	it("toString", () => expect(node.toString()).toEqual("### Header"))
})
