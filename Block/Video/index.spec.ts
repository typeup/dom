import { mendly } from "mendly"
import { dom } from "../../index.js"

describe("dom.Block.Video", () => {
	const node = new dom.Block.Video(
		new mendly.Uri(undefined, undefined, [".", "video.ogg"]),
		["class"],
		[new dom.Inline.Text("Caption.")]
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.hydrate({
				class: "block.video",
				source: "./video.ogg",
				classes: ["class"],
				content: [{ class: "inline.text", value: "Caption." }]
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.video"))
	it("source", () => expect(node.source).toEqual(new mendly.Uri(undefined, undefined, [".", "video.ogg"])))

	it("classes", () => expect(node.classes).toEqual(["class"]))
	it("content", () => expect(node.content).toEqual([new dom.Inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.dehydrate()).toEqual({
			source: "./video.ogg",
			classes: ["class"],
			content: [{ value: "Caption.", class: "inline.text" }],
			class: "block.video"
		}))
	it("toString", () => expect(node.toString()).toEqual("!video ./video.ogg class\nCaption."))
	it.each([
		{ name: "parsed source", source: "./video.ogg", expected: "./video.ogg" },
		{ name: "fallback source", source: undefined, expected: "/" }
	])("create $name", ({ source, expected }) => {
		const hydrated = dom.Node.hydrate({
			class: "block.video",
			source,
			classes: ["class"],
			content: [{ class: "inline.text", value: "Caption." }]
		}) as dom.Block.Video
		expect(hydrated.source.toString()).toBe(expected)
	})
	it.each([
		["ogg", "video/ogg"],
		["mp4", "video/mp4"],
		["", ""]
	])("type with extension %s returns %s", (extension, expected) => {
		const videoNode = new dom.Block.Video(
			new mendly.Uri(undefined, undefined, [".", `video.${extension}`]),
			["class"],
			[new dom.Inline.Text("Caption.")]
		)
		expect(videoNode.type).toBe(expected)
	})
	it.each([
		{
			name: "ogg",
			input: new dom.Block.Video(
				new mendly.Uri(undefined, undefined, [".", "video.ogg"]),
				[],
				[new dom.Inline.Text("Caption.")]
			).dehydrate()
		},
		{
			name: "mp4",
			input: new dom.Block.Video(
				new mendly.Uri(undefined, undefined, [".", "video.mp4"]),
				[],
				[new dom.Inline.Text("Caption.")]
			).dehydrate()
		}
	])("dehydrate snapshot $name", ({ input }) => expect(input).toMatchSnapshot())
})
