import { dom } from "../../index"

describe("dom.Block.List.Ordered", () => {
	const node = new dom.Block.List.Ordered([
		new dom.Block.List.Item([new dom.Block.Paragraph([new dom.Inline.Text("Item 0")])]),
	])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Block.List.Ordered",
				content: [
					{
						class: "Block.List.Item",
						content: [{ class: "Block.Paragraph", content: [{ class: "Text", value: "Item 0" }] }],
					},
				],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.List.Ordered"))
	it("name", () =>
		expect(node.content).toEqual([new dom.Block.List.Item([new dom.Block.Paragraph([new dom.Inline.Text("Item 0")])])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [
				{
					content: [
						{
							content: [{ value: "Item 0", class: "Text" }],
							class: "Block.Paragraph",
						},
					],
					class: "Block.List.Item",
				},
			],
			class: "Block.List.Ordered",
		}))
	it("toString", () => expect(node.toString()).toEqual("1. Item 0"))
})
