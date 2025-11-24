import { dom } from "../index"

describe("dom.Block.Code", () => {
	const node = new dom.Block.Code("c", 'printf("Hello, World!")', [new dom.Inline.Text("Caption.")])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.code",
				language: "c",
				value: 'printf("Hello, World!")',
				content: [{ class: "text", value: "Caption." }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.code"))
	it("name", () => expect(node.content).toEqual([new dom.Inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			language: "c",
			value: 'printf("Hello, World!")',
			content: [{ value: "Caption.", class: "text" }],
			class: "block.code",
		}))
	it("toString", () => expect(node.toString()).toEqual('%% c\nprintf("Hello, World!")\n%%\nCaption.'))
})
