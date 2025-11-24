import { dom } from "../index"

describe("block.Section", () => {
	const node = new dom.Block.Section([new dom.Block.Paragraph([new dom.Inline.Text("paragraph")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Block.Section",
				content: [{ class: "Block.Paragraph", content: [{ class: "Text", value: "paragraph" }] }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.Section"))
	it("name", () => expect(node.content).toEqual([new dom.Block.Paragraph([new dom.Inline.Text("paragraph")])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [
				{
					content: [{ value: "paragraph", class: "Text" }],
					class: "Block.Paragraph",
				},
			],
			class: "Block.Section",
		}))
	it("toString", () => expect(node.toString()).toEqual("---\nparagraph"))
})
