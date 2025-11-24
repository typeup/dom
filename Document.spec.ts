import { dom } from "./index"

describe("dom.Document", () => {
	const node = new dom.Document([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "document",
				content: [{ class: "block.paragraph", content: [{ class: "text", value: "Paragraph." }] }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("document"))

	it("content", () => expect(node.content).toEqual([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			class: "document",
			content: [
				{
					class: "block.paragraph",
					content: [{ value: "Paragraph.", class: "text" }],
				},
			],
		}))
	it("toJson", () =>
		expect(node.toJson()).toMatchInlineSnapshot(
			`"{"class":"document","content":[{"class":"block.paragraph","content":[{"class":"text","value":"Paragraph."}]}]}"`
		))
	it("empty document", () => {
		const document = new dom.Document([])
		expect(document.content).toEqual([])
		expect(document.class).toBe("document")
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
