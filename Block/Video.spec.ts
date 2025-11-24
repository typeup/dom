import { mendly } from "mendly"
import { dom } from "../index"

describe("block.Video", () => {
	const node = new dom.Block.Video(
		new mendly.Uri(undefined, undefined, [".", "video.ogg"]),
		["class"],
		[new dom.Inline.Text("Caption.")]
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Video"))
	it("source", () => expect(node.source).toEqual(new mendly.Uri(undefined, undefined, [".", "video.ogg"])))

	it("classes", () => expect(node.classes).toEqual(["class"]))
	it("content", () => expect(node.content).toEqual([new dom.Inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			source: "./video.ogg",
			classes: ["class"],
			content: [{ value: "Caption.", class: "Inline.Text" }],
			class: "Block.Video",
		}))
	it("toString", () => expect(node.toString()).toEqual("!video ./video.ogg class\nCaption."))
})
