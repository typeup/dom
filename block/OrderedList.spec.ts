import * as dom from "../index"

describe("block.OrderedList", () => {
	const node = new dom.block.OrderedList([
		new dom.block.ListItem([new dom.block.Paragraph([new dom.inline.Text("Item 0")])]),
	])
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.OrderedList"))
	it("name", () =>
		expect(node.content).toEqual([new dom.block.ListItem([new dom.block.Paragraph([new dom.inline.Text("Item 0")])])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [
				{
					content: [
						{
							content: [{ value: "Item 0", class: "Inline.Text" }],
							class: "Block.Paragraph",
						},
					],
					class: "Block.ListItem",
				},
			],
			class: "Block.OrderedList",
		}))
	it("toString", () => expect(node.toString()).toEqual("1. Item 0"))
})
