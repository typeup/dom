import { dom } from "../../index"

describe("dom.Block.List.Unordered", () => {
	const node = new dom.Block.List.Unordered([
		new dom.Block.List.Item([new dom.Block.Paragraph([new dom.Inline.Text("Item 0")])]),
	])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.list.unordered",
				content: [
					{
						class: "block.list.item",
						content: [{ class: "block.paragraph", content: [{ class: "inline.text", value: "Item 0" }] }],
					},
				],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.list.unordered"))
	it("content", () =>
		expect(node.content).toEqual([new dom.Block.List.Item([new dom.Block.Paragraph([new dom.Inline.Text("Item 0")])])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [
				{
					content: [
						{
							content: [{ value: "Item 0", class: "inline.text" }],
							class: "block.paragraph",
						},
					],
					class: "block.list.item",
				},
			],
			class: "block.list.unordered",
		}))
	it("toString", () => expect(node.toString()).toEqual("- Item 0"))
})
