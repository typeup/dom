import * as dom from "../index"

describe("block.Paragraph", () => {
	const node = new dom.block.Paragraph([new dom.inline.Text("paragraph")])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Paragraph"))
	it("name", () => expect(node.content).toEqual([new dom.inline.Text("paragraph")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [{ value: "paragraph", class: "Inline.Text" }],
			class: "Block.Paragraph",
		}))
	it("toString", () => expect(node.toString()).toEqual("paragraph"))
})
