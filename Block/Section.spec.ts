import { dom } from "../index"

describe("block.Section", () => {
	const node = new dom.Block.Section([new dom.Block.Paragraph([new dom.Inline.Text("paragraph")])])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.section",
				content: [{ class: "block.paragraph", content: [{ class: "text", value: "paragraph" }] }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.section"))
	it("name", () => expect(node.content).toEqual([new dom.Block.Paragraph([new dom.Inline.Text("paragraph")])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [
				{
					content: [{ value: "paragraph", class: "text" }],
					class: "block.paragraph",
				},
			],
			class: "block.section",
		}))
	it("toString", () => expect(node.toString()).toEqual("---\nparagraph"))
})
