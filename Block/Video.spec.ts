import { mendly } from "mendly"
import { dom } from "../index"

describe("block.Video", () => {
	const node = new dom.Block.Video(
		new mendly.Uri(undefined, undefined, [".", "video.ogg"]),
		["class"],
		[new dom.Inline.Text("Caption.")]
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Block.Video",
				source: new mendly.Uri(undefined, undefined, [".", "video.ogg"]),
				classes: ["class"],
				content: [{ class: "Text", value: "Caption." }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.Video"))
	it("source", () => expect(node.source).toEqual(new mendly.Uri(undefined, undefined, [".", "video.ogg"])))

	it("classes", () => expect(node.classes).toEqual(["class"]))
	it("content", () => expect(node.content).toEqual([new dom.Inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			source: "./video.ogg",
			classes: ["class"],
			content: [{ value: "Caption.", class: "Text" }],
			class: "Block.Video",
		}))
	it("toString", () => expect(node.toString()).toEqual("!video ./video.ogg class\nCaption."))
	it.each([
		["ogg", "video/ogg"],
		["mp4", "video/mp4"],
		["", ""],
	])("type with extension %s returns %s", (extension, expected) => {
		const videoNode = new dom.Block.Video(
			new mendly.Uri(undefined, undefined, [".", `video.${extension}`]),
			["class"],
			[new dom.Inline.Text("Caption.")]
		)
		expect(videoNode.type).toBe(expected)
	})
})
