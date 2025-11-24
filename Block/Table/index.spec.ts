import { dom } from "../../index"

describe("block.Table", () => {
	const node = new dom.Block.Table(
		["left", "center", "right", ""],
		[
			new dom.Block.Table.Row([
				new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header 0")]),
				new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header 1")]),
				new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header 2")]),
				new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header 3")]),
			]),
			new dom.Block.Table.Row([
				new dom.Block.Table.Cell(false, [new dom.Inline.Text("value 0")]),
				new dom.Block.Table.Cell(false, [new dom.Inline.Text("value 1")]),
				new dom.Block.Table.Cell(false, [new dom.Inline.Text("value 2")]),
				new dom.Block.Table.Cell(false, [new dom.Inline.Text("value 3")]),
			]),
		],
		[new dom.Block.Paragraph([new dom.Inline.Text("Caption.")])]
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.table",
				alignments: ["left", "center", "right", ""],
				rows: [
					{
						class: "block.table.row",
						content: [
							{ class: "block.table.cell", content: [{ class: "text", value: "Header 0" }], header: true },
							{ class: "block.table.cell", content: [{ class: "text", value: "Header 1" }], header: true },
							{ class: "block.table.cell", content: [{ class: "text", value: "Header 2" }], header: true },
							{ class: "block.table.cell", content: [{ class: "text", value: "Header 3" }], header: true },
						],
					},
					{
						class: "block.table.row",
						content: [
							{ class: "block.table.cell", content: [{ class: "text", value: "value 0" }], header: false },
							{ class: "block.table.cell", content: [{ class: "text", value: "value 1" }], header: false },
							{ class: "block.table.cell", content: [{ class: "text", value: "value 2" }], header: false },
							{ class: "block.table.cell", content: [{ class: "text", value: "value 3" }], header: false },
						],
					},
				],
				content: [{ class: "block.paragraph", content: [{ class: "text", value: "Caption." }] }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.table"))
	it("alignments", () => expect(node.alignments).toEqual(["left", "center", "right", ""]))
	it("rows", () =>
		expect(node.rows).toEqual([
			new dom.Block.Table.Row([
				new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header 0")]),
				new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header 1")]),
				new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header 2")]),
				new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header 3")]),
			]),
			new dom.Block.Table.Row([
				new dom.Block.Table.Cell(false, [new dom.Inline.Text("value 0")]),
				new dom.Block.Table.Cell(false, [new dom.Inline.Text("value 1")]),
				new dom.Block.Table.Cell(false, [new dom.Inline.Text("value 2")]),
				new dom.Block.Table.Cell(false, [new dom.Inline.Text("value 3")]),
			]),
		]))
	it("content", () => expect(node.content).toEqual([new dom.Block.Paragraph([new dom.Inline.Text("Caption.")])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			alignments: ["left", "center", "right", ""],
			rows: [
				{
					class: "block.table.row",
					content: [
						{
							class: "block.table.cell",
							content: [{ class: "text", value: "Header 0" }],
							header: true,
						},
						{
							class: "block.table.cell",
							content: [{ class: "text", value: "Header 1" }],
							header: true,
						},
						{
							class: "block.table.cell",
							content: [{ class: "text", value: "Header 2" }],
							header: true,
						},
						{
							class: "block.table.cell",
							content: [{ class: "text", value: "Header 3" }],
							header: true,
						},
					],
				},
				{
					class: "block.table.row",
					content: [
						{
							class: "block.table.cell",
							content: [{ class: "text", value: "value 0" }],
							header: false,
						},
						{
							class: "block.table.cell",
							content: [{ class: "text", value: "value 1" }],
							header: false,
						},
						{
							class: "block.table.cell",
							content: [{ class: "text", value: "value 2" }],
							header: false,
						},
						{
							class: "block.table.cell",
							content: [{ class: "text", value: "value 3" }],
							header: false,
						},
					],
				},
			],
			content: [
				{
					content: [{ value: "Caption.", class: "text" }],
					class: "block.paragraph",
				},
			],
			class: "block.table",
		}))
	it("toString", () =>
		expect(node.toString()).toEqual(
			"| Header 0 | Header 1 | Header 2 | Header 3 |\n|:--|:-:|--:|---|\n| value 0 | value 1 | value 2 | value 3 |\nCaption."
		))
})
