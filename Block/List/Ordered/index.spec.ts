import { dom } from "../../../index"

describe("dom.Block.List.Ordered", () => {
	const data = {
		sparse: new dom.Block.List.Ordered([
			new dom.Block.List.Item([new dom.Block.Paragraph([new dom.Inline.Text("Item 0")])])
		]),
		sparseMultipleBlocks: new dom.Block.List.Ordered([
			new dom.Block.List.Item([
				new dom.Block.Paragraph([new dom.Inline.Text("Item 0")]),
				new dom.Block.EmptyLine(),
				new dom.Block.Paragraph([new dom.Inline.Text("Item 1")])
			])
		]),
		dense: new dom.Block.List.Ordered([new dom.Block.List.Item([new dom.Inline.Text("Item 0")])]),
		nested: new dom.Block.List.Ordered([
			new dom.Block.List.Item([
				new dom.Inline.Text("Item 0"),
				new dom.Block.EmptyLine(),
				new dom.Block.List.Ordered([
					new dom.Block.List.Item([new dom.Inline.Text("Nested 0")]),
					new dom.Block.List.Item([new dom.Inline.Text("Nested 1")])
				])
			])
		])
	}
	it("constructor", () => expect(data.sparse).toBeTruthy())
	it.each([
		{
			label: "sparse",
			data: {
				class: "block.list.ordered",
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
				class: "block.list.ordered",
				content: [{ class: "block.list.item", content: [{ class: "inline.text", value: "Item 0" }] }]
			},
			expected: data.dense
		}
	])("create $label", ({ data, expected }) => expect(dom.Node.create(data)).toEqual(expected))
	it("class", () => expect(data.sparse.class).toBe("block.list.ordered"))
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
				class: "block.list.ordered"
			}
		},
		{
			label: "dense",
			node: data.dense,
			expected: {
				content: [{ content: [{ value: "Item 0", class: "inline.text" }], class: "block.list.item" }],
				class: "block.list.ordered"
			}
		}
	])("toObject $label", ({ node, expected }) => expect(node.toObject()).toEqual(expected))
	it.each([
		{ label: "sparse", node: data.sparse },
		{ label: "dense", node: data.dense }
	])("toString $label", ({ node }) => expect(node.toString()).toEqual("1. Item 0"))
	it("toString sparse multiple blocks", () =>
		expect(data.sparseMultipleBlocks.toString()).toEqual("1. Item 0\n\tItem 1"))
	it("toString nested", () => expect(data.nested.toString()).toEqual("1. Item 0\n\t1. Nested 0\n\t1. Nested 1"))
})
