import { dom } from "../../index"

describe("dom.Block.List.Ordered", () => {
	const node = new dom.Block.List.Ordered([
		new dom.Block.List.Item([new dom.Block.Paragraph([new dom.Inline.Text("Item 0")])]),
	])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.list.ordered",
				content: [
					{
						class: "block.list.item",
						content: [{ class: "block.paragraph", content: [{ class: "text", value: "Item 0" }] }],
					},
				],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.list.ordered"))
	it("name", () =>
		expect(node.content).toEqual([new dom.Block.List.Item([new dom.Block.Paragraph([new dom.Inline.Text("Item 0")])])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [
				{
					content: [
						{
							content: [{ value: "Item 0", class: "text" }],
							class: "block.paragraph",
						},
					],
					class: "block.list.item",
				},
			],
			class: "block.list.ordered",
		}))
	it("toString", () => expect(node.toString()).toEqual("1. Item 0"))
})
