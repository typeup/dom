import { mendly } from "mendly"
import { dom } from "../../index.js"

describe("dom.Block.Import", () => {
	const source = new mendly.Uri(undefined, undefined, [".", "subdocument.tup"])
	const node = new dom.Block.Import(
		source,
		new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.hydrate({
				class: "block.import",
				source: "./subdocument.tup",
				content: {
					class: "file",
					content: [{ class: "block.paragraph", content: [{ value: "Paragraph.", class: "inline.text" }] }]
				}
			})
		).toEqual(node))
	it("create no content", () =>
		expect(dom.Node.hydrate({ class: "block.import", source: "./subdocument.tup" })).toEqual(
			new dom.Block.Import(source, undefined)
		))
	it("create invalid content shape", () =>
		expect(
			dom.Node.hydrate({
				class: "block.import",
				source: "./subdocument.tup",
				content: { class: "inline.text", value: "Paragraph." }
			})
		).toEqual(new dom.Block.Import(source, undefined)))
	it("create fallback source", () =>
		expect(dom.Node.hydrate({ class: "block.import", source: undefined, content: "Paragraph." })).toEqual(
			new dom.Block.Import(mendly.Uri.empty, "Paragraph.")
		))
	it("class", () => expect(node.class).toBe("block.import"))
	it("source", () => expect(node.source).toEqual(source))

	it("content", () =>
		expect(node.content).toEqual(new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])))
	it("toObject", () =>
		expect(node.dehydrate()).toEqual({
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
		expect(node.dehydrate()).toEqual({ source: "./subdocument.tup", content, class: "block.import" }))
	it.each([
		{ name: "file", input: new dom.Block.Import(source, node.content).dehydrate() },
		{ name: "string", input: new dom.Block.Import(source, "Paragraph.").dehydrate() },
		{ name: "undefined", input: new dom.Block.Import(source, undefined).dehydrate() }
	])("dehydrate snapshot $name", ({ input }) => expect(input).toMatchSnapshot())
	it("toString", () => expect(node.toString()).toEqual("!import ./subdocument.tup\n"))
})
