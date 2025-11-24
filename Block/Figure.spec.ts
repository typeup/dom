import { mendly } from "mendly"
import { dom } from "../index"

describe("block.Figure", () => {
	const node = new dom.Block.Figure(
		new mendly.Uri(undefined, undefined, [".", "image.png"]),
		["class"],
		[new dom.Inline.Text("Caption.")]
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.figure",
				source: new mendly.Uri(undefined, undefined, [".", "image.png"]),
				classes: ["class"],
				content: [{ class: "text", value: "Caption." }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.figure"))
	it("source", () => expect(node.source).toEqual(new mendly.Uri(undefined, undefined, [".", "image.png"])))

	it("classes", () => expect(node.classes).toEqual(["class"]))
	it("content", () => expect(node.content).toEqual([new dom.Inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			source: "./image.png",
			classes: ["class"],
			content: [{ value: "Caption.", class: "text" }],
			class: "block.figure",
		}))
	it("toString", () => expect(node.toString()).toEqual("!figure ./image.png class\nCaption."))
})
