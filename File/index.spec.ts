import { dom } from "../index.js"

describe("dom.File", () => {
	const node = new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.hydrate({
				class: "file",
				content: [{ class: "block.paragraph", content: [{ class: "inline.text", value: "Paragraph." }] }]
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("file"))

	it("content", () => expect(node.content).toEqual([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])]))
	it("toObject", () =>
		expect(node.dehydrate()).toEqual({
			class: "file",
			content: [{ class: "block.paragraph", content: [{ value: "Paragraph.", class: "inline.text" }] }]
		}))
	it("toString", () => expect(node.toString()).toEqual("Paragraph."))
})
