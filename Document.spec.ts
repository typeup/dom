import { dom } from "./index"

describe("Document", () => {
	const node = new dom.Document([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Document",
				content: [{ class: "Block.Paragraph", content: [{ class: "Inline.Text", value: "Paragraph." }] }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Document"))

	it("content", () => expect(node.content).toEqual([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			class: "Document",
			content: [
				{
					class: "Block.Paragraph",
					content: [{ value: "Paragraph.", class: "Inline.Text" }],
				},
			],
		}))
	it("toString", () => expect(node.toString()).toEqual("Paragraph."))
})
