import { dom } from "./index"

describe("Document", () => {
	const node = new dom.Document([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Document",
				content: [{ class: "Block.Paragraph", content: [{ class: "Text", value: "Paragraph." }] }],
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
					content: [{ value: "Paragraph.", class: "Text" }],
				},
			],
		}))
	it("toJson", () =>
		expect(node.toJson()).toMatchInlineSnapshot(
			`"{"class":"Document","content":[{"class":"Block.Paragraph","content":[{"class":"Text","value":"Paragraph."}]}]}"`
		))
	it("empty document", () => {
		const document = new dom.Document([])
		expect(document.content).toEqual([])
		expect(document.class).toBe("Document")
	})
	it("multiple blocks", () => {
		const document = new dom.Document([
			new dom.Block.Paragraph([new dom.Inline.Text("First paragraph.")]),
			new dom.Block.Paragraph([new dom.Inline.Text("Second paragraph.")]),
		])
		expect(document.content.length).toBe(2)
		expect(document.toString()).toMatchInlineSnapshot(`
			"First paragraph.
			Second paragraph."
		`)
	})
	it("toString", () => expect(node.toString()).toEqual("Paragraph."))
})
