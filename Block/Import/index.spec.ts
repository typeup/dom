import { mendly } from "mendly"
import { dom } from "../../index.js"

describe("dom.Block.Import", () => {
	const source = new mendly.Uri(undefined, undefined, [".", "subdocument.tup"])
	const node = new dom.Block.Import(
		source,
		new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])
	)
	it("constructor", () => expect(node).toBeTruthy())
	it.each<{ name: string; actual: () => unknown }>([
		{
			name: "file content",
			actual: () =>
				dom
					.hydrate({
						class: "block.import",
						source: "./subdocument.tup",
						content: {
							class: "file",
							content: [{ class: "block.paragraph", content: [{ value: "Paragraph.", class: "inline.text" }] }]
						}
					})
					?.dehydrate()
		},
		{
			name: "no content",
			actual: () => dom.hydrate({ class: "block.import", source: "./subdocument.tup" })?.dehydrate()
		},
		{
			name: "invalid content shape",
			actual: () =>
				dom
					.hydrate({
						class: "block.import",
						source: "./subdocument.tup",
						content: { class: "inline.text", value: "Paragraph." }
					})
					?.dehydrate()
		},
		{
			name: "fallback source",
			actual: () => dom.hydrate({ class: "block.import", source: undefined, content: "Paragraph." })?.dehydrate()
		},
		{
			name: "nested content keeps nested source",
			actual: () => {
				const levelTwo = dom.hydrate({ class: "document", content: [] })
				const levelOne = dom.hydrate({
					class: "document",
					content: [{ class: "block.import", source: "./nested/level_two", content: levelTwo }]
				})
				const root = dom.hydrate({
					class: "document",
					content: [{ class: "block.import", source: "./sample/level_one", content: levelOne }]
				})
				return root?.toJSON()
			}
		}
	])("hydrate $name", ({ actual }) => expect(actual()).toMatchSnapshot())
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
