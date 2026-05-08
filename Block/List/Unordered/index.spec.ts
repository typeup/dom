import { dom } from "../../../index"

describe("dom.Block.List.Unordered", () => {
	const data = {
		sparse: new dom.Block.List.Unordered([
			new dom.Block.List.Item([new dom.Block.Paragraph([new dom.Inline.Text("Item 0")])])
		]),
		dense: new dom.Block.List.Unordered([new dom.Block.List.Item([new dom.Inline.Text("Item 0")])])
	}
	it("constructor", () => expect(data.sparse).toBeTruthy())
	it.each([
		{
			label: "sparse",
			data: {
				class: "block.list.unordered",
				content: [
					{
						class: "block.list.item",
						content: [{ class: "block.paragraph", content: [{ class: "inline.text", value: "Item 0" }] }]
					}
				]
			},
			expected: data.sparse
		},
		{
			label: "dense",
			data: {
				class: "block.list.unordered",
				content: [{ class: "block.list.item", content: [{ class: "inline.text", value: "Item 0" }] }]
			},
			expected: data.dense
		}
	])("create $label", ({ data, expected }) => expect(dom.Node.create(data)).toEqual(expected))
	it("class", () => expect(data.sparse.class).toBe("block.list.unordered"))
	it("content", () =>
		expect(data.sparse.content).toEqual([
			new dom.Block.List.Item([new dom.Block.Paragraph([new dom.Inline.Text("Item 0")])])
		]))
	it.each([
		{
			label: "sparse",
			node: data.sparse,
			expected: {
				content: [
					{
						content: [{ content: [{ value: "Item 0", class: "inline.text" }], class: "block.paragraph" }],
						class: "block.list.item"
					}
				],
				class: "block.list.unordered"
			}
		},
		{
			label: "dense",
			node: data.dense,
			expected: {
				content: [{ content: [{ value: "Item 0", class: "inline.text" }], class: "block.list.item" }],
				class: "block.list.unordered"
			}
		}
	])("toObject $label", ({ node, expected }) => expect(node.toObject()).toEqual(expected))
	it.each([
		{ label: "sparse", node: data.sparse },
		{ label: "dense", node: data.dense }
	])("toString $label", ({ node }) => expect(node.toString()).toEqual("- Item 0"))
})
