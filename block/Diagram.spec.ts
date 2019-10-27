import * as dom from "../index"

describe("block.Diagram", () => {
	const node = new dom.block.Diagram("<svg></svg>", [ new dom.inline.Text("Caption.")])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Diagram"))
	it("value", () => expect(node.value).toEqual("<svg></svg>"))
	it("content", () => expect(node.content).toEqual([new dom.inline.Text("Caption.")]))
	it("toObject", () => expect(node.toObject()).toEqual({ value: "<svg></svg>", content: [{ value: "Caption.", class: "Inline.Text" }], class: "Block.Diagram" }))
	it("toString", () => expect(node.toString()).toEqual("++\n<svg></svg>\n++\nCaption."))
})
