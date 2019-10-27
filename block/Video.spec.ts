import { Uri } from "@cogneco/mend"
import * as dom from "../index"

describe("block.Video", () => {
	const node = new dom.block.Video(new Uri.Locator(undefined, undefined, [".", "video.ogg"]), ["class"], [ new dom.inline.Text("Caption.")])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Video"))
	it("source", () => expect(node.source).toEqual(new Uri.Locator(undefined, undefined, [".", "video.ogg"])))

	it("classes", () => expect(node.classes).toEqual(["class"]))
	it("content", () => expect(node.content).toEqual([new dom.inline.Text("Caption.")]))
	it("toObject", () => expect(node.toObject()).toEqual({ source: "./video.ogg", classes: ["class"], content: [{ value: "Caption.", class: "Inline.Text" }], class: "Block.Video" }))
	it("toString", () => expect(node.toString()).toEqual("!video ./video.ogg class\nCaption."))
})
