import * as dom from "../index"

describe("block.Math", () => {
	const node = new dom.block.Math("a^2 + b^2 = c^2", [new dom.inline.Text("Caption.")])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Math"))
	it("name", () => expect(node.content).toEqual([new dom.inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			value: "a^2 + b^2 = c^2",
			content: [{ value: "Caption.", class: "Inline.Text" }],
			class: "Block.Math",
		}))
	it("toString", () => expect(node.toString()).toEqual("$$\na^2 + b^2 = c^2\n$$\nCaption."))
})
