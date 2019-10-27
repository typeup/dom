import * as dom from "./index"

describe("File", () => {
	const node = new dom.File([new dom.block.Paragraph([new dom.inline.Text("Paragraph.")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("File"))

	it("content", () => expect(node.content).toEqual([new dom.block.Paragraph([new dom.inline.Text("Paragraph.")])]))
	it("toObject", () => expect(node.toObject()).toEqual({ class: "File", content: [{ class: "Block.Paragraph", content: [{ value: "Paragraph.", class: "Inline.Text" }] }] }))
	it("toString", () => expect(node.toString()).toEqual("Paragraph."))
})
