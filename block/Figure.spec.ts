import { Uri } from "@cogneco/mend"
import * as dom from "../index"

describe("block.Figure", () => {
	const node = new dom.block.Figure(new Uri.Locator(undefined, undefined, [".", "image.png"]), ["class"], [ new dom.inline.Text("Caption.")])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Figure"))
	it("source", () => expect(node.source).toEqual(new Uri.Locator(undefined, undefined, [".", "image.png"])))

	it("classes", () => expect(node.classes).toEqual(["class"]))
	it("content", () => expect(node.content).toEqual([new dom.inline.Text("Caption.")]))
	it("toObject", () => expect(node.toObject()).toEqual({ source: "./image.png", classes: ["class"], content: [{ value: "Caption.", class: "Inline.Text" }], class: "Block.Figure" }))
	it("toString", () => expect(node.toString()).toEqual("!figure ./image.png class\nCaption."))
})
