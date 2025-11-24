import * as dom from "../index"

describe("block.Code", () => {
	const node = new dom.block.Code("c", 'printf("Hello, World!")', [new dom.inline.Text("Caption.")])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Code"))
	it("name", () => expect(node.content).toEqual([new dom.inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			language: "c",
			value: 'printf("Hello, World!")',
			content: [{ value: "Caption.", class: "Inline.Text" }],
			class: "Block.Code",
		}))
	it("toString", () => expect(node.toString()).toEqual('%% c\nprintf("Hello, World!")\n%%\nCaption.'))
})
