import { mendly } from "mendly"
import { dom } from "../../index.js"

describe("dom.Block.Figure", () => {
	const node = new dom.Block.Figure(
		new mendly.Uri(undefined, undefined, [".", "image.png"]),
		["class"],
		[new dom.Inline.Text("Caption.")]
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.hydrate({
				class: "block.figure",
				source: "./image.png",
				classes: ["class"],
				content: [{ class: "inline.text", value: "Caption." }]
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.figure"))
	it("source", () => expect(node.source).toEqual(new mendly.Uri(undefined, undefined, [".", "image.png"])))

	it("classes", () => expect(node.classes).toEqual(["class"]))
	it("content", () => expect(node.content).toEqual([new dom.Inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.dehydrate()).toEqual({
			source: "./image.png",
			classes: ["class"],
			content: [{ value: "Caption.", class: "inline.text" }],
			class: "block.figure"
		}))
	it("toString", () => expect(node.toString()).toEqual("!figure ./image.png class\nCaption."))
})
