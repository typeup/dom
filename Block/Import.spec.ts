import { mendly } from "mendly"
import { dom } from "../index"

describe("block.Import", () => {
	const node = new dom.Block.Import(
		new mendly.Uri(undefined, undefined, [".", "subdocument.tup"]),
		new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Block.Import",
				source: new mendly.Uri(undefined, undefined, [".", "subdocument.tup"]),
				content: new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])]),
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.Import"))
	it("source", () => expect(node.source).toEqual(new mendly.Uri(undefined, undefined, [".", "subdocument.tup"])))

	it("content", () =>
		expect(node.content).toEqual(new dom.File([new dom.Block.Paragraph([new dom.Inline.Text("Paragraph.")])])))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			source: "./subdocument.tup",
			content: {
				class: "File",
				content: [
					{
						class: "Block.Paragraph",
						content: [{ value: "Paragraph.", class: "Inline.Text" }],
					},
				],
			},
			class: "Block.Import",
		}))
	it("toString", () => expect(node.toString()).toEqual("!import ./subdocument.tup\n"))
})
