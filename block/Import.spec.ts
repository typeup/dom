import { Uri } from "@cogneco/mend"
import * as dom from "../index"

describe("block.Import", () => {
	const node = new dom.block.Import(new Uri.Locator(undefined, undefined, [".", "subdocument.tup"]),
		new dom.File([new dom.block.Paragraph([new dom.inline.Text("Paragraph.")])]),
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Import"))
	it("source", () => expect(node.source).toEqual(new Uri.Locator(undefined, undefined, [".", "subdocument.tup"])))

	it("content", () => expect(node.content).toEqual(new dom.File([new dom.block.Paragraph([new dom.inline.Text("Paragraph.")])])))
	it("toObject", () => expect(node.toObject()).toEqual({ source: "./subdocument.tup", content: { class: "File", content: [{ class: "Block.Paragraph", content: [{ value: "Paragraph.", class: "Inline.Text" }] }] }, class: "Block.Import" }))
	it("toString", () => expect(node.toString()).toEqual("!import ./subdocument.tup\n"))
})
