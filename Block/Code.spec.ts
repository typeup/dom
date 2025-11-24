import { dom } from "../index"

describe("block.Code", () => {
	const node = new dom.Block.Code("c", 'printf("Hello, World!")', [new dom.Inline.Text("Caption.")])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Block.Code",
				language: "c",
				value: 'printf("Hello, World!")',
				content: [{ class: "Inline.Text", value: "Caption." }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.Code"))
	it("name", () => expect(node.content).toEqual([new dom.Inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			language: "c",
			value: 'printf("Hello, World!")',
			content: [{ value: "Caption.", class: "Inline.Text" }],
			class: "Block.Code",
		}))
	it("toString", () => expect(node.toString()).toEqual('%% c\nprintf("Hello, World!")\n%%\nCaption.'))
})
