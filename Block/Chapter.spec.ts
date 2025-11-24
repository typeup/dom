import { dom } from "../index"

describe("block.Chapter", () => {
	const node = new dom.Block.Chapter([new dom.Block.Paragraph([new dom.Inline.Text("paragraph")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Block.Chapter",
				content: [{ class: "Block.Paragraph", content: [{ class: "Inline.Text", value: "paragraph" }] }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.Chapter"))
	it("name", () => expect(node.content).toEqual([new dom.Block.Paragraph([new dom.Inline.Text("paragraph")])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [
				{
					content: [{ value: "paragraph", class: "Inline.Text" }],
					class: "Block.Paragraph",
				},
			],
			class: "Block.Chapter",
		}))
	it("toString", () => expect(node.toString()).toEqual("===\nparagraph"))
})
