import { mendly } from "mendly"
import { dom } from "../../index"

describe("dom.Block.Import", () => {
	const source = new mendly.Uri(undefined, undefined, [".", "subdocument.tup"])
	const node = new dom.Block.Import(
		source,
		new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.import",
				source,
				content: new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])
			})
		).toEqual(node))
	it("create no content", () => expect(() => dom.Node.create({ class: "block.import", source })).toThrow(TypeError))
	it("class", () => expect(node.class).toBe("block.import"))
	it("source", () => expect(node.source).toEqual(source))

	it("content", () =>
		expect(node.content).toEqual(new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			source: "./subdocument.tup",
			content: {
				class: "file",
				content: [{ class: "block.paragraph", content: [{ value: "Paragraph.", class: "inline.text" }] }]
			},
			class: "block.import"
		}))
	it.each([
		{ node: new dom.Block.Import(source, "Paragraph."), content: "Paragraph." },
		{ node: new dom.Block.Import(source, undefined), content: undefined }
	])("toObject content", ({ node, content }) =>
		expect(node.toObject()).toEqual({ source: "./subdocument.tup", content, class: "block.import" }))
	it("toString", () => expect(node.toString()).toEqual("!import ./subdocument.tup\n"))
})
