import { dom } from "../index"

describe("block.Table", () => {
	const node = new dom.Block.Table(
		["left", "center", "right"],
		[
			new dom.Block.TableRow([
				new dom.Block.TableCell(true, [new dom.Inline.Text("Header 0")]),
				new dom.Block.TableCell(true, [new dom.Inline.Text("Header 1")]),
				new dom.Block.TableCell(true, [new dom.Inline.Text("Header 2")]),
			]),
			new dom.Block.TableRow([
				new dom.Block.TableCell(false, [new dom.Inline.Text("value 0")]),
				new dom.Block.TableCell(false, [new dom.Inline.Text("value 1")]),
				new dom.Block.TableCell(false, [new dom.Inline.Text("value 2")]),
			]),
		],
		[new dom.Block.Paragraph([new dom.Inline.Text("Caption.")])]
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Block.Table",
				alignments: ["left", "center", "right"],
				rows: [
					{
						class: "Block.TableRow",
						content: [
							{ class: "Block.TableCell", content: [{ class: "Inline.Text", value: "Header 0" }], header: true },
							{ class: "Block.TableCell", content: [{ class: "Inline.Text", value: "Header 1" }], header: true },
							{ class: "Block.TableCell", content: [{ class: "Inline.Text", value: "Header 2" }], header: true },
						],
					},
					{
						class: "Block.TableRow",
						content: [
							{ class: "Block.TableCell", content: [{ class: "Inline.Text", value: "value 0" }], header: false },
							{ class: "Block.TableCell", content: [{ class: "Inline.Text", value: "value 1" }], header: false },
							{ class: "Block.TableCell", content: [{ class: "Inline.Text", value: "value 2" }], header: false },
						],
					},
				],
				content: [{ class: "Block.Paragraph", content: [{ class: "Inline.Text", value: "Caption." }] }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.Table"))
	it("alignments", () => expect(node.alignments).toEqual(["left", "center", "right"]))
	it("rows", () =>
		expect(node.rows).toEqual([
			new dom.Block.TableRow([
				new dom.Block.TableCell(true, [new dom.Inline.Text("Header 0")]),
				new dom.Block.TableCell(true, [new dom.Inline.Text("Header 1")]),
				new dom.Block.TableCell(true, [new dom.Inline.Text("Header 2")]),
			]),
			new dom.Block.TableRow([
				new dom.Block.TableCell(false, [new dom.Inline.Text("value 0")]),
				new dom.Block.TableCell(false, [new dom.Inline.Text("value 1")]),
				new dom.Block.TableCell(false, [new dom.Inline.Text("value 2")]),
			]),
		]))
	it("content", () => expect(node.content).toEqual([new dom.Block.Paragraph([new dom.Inline.Text("Caption.")])]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			alignments: ["left", "center", "right"],
			rows: [
				{
					class: "Block.TableRow",
					content: [
						{
							class: "Block.TableCell",
							content: [{ class: "Inline.Text", value: "Header 0" }],
							header: true,
						},
						{
							class: "Block.TableCell",
							content: [{ class: "Inline.Text", value: "Header 1" }],
							header: true,
						},
						{
							class: "Block.TableCell",
							content: [{ class: "Inline.Text", value: "Header 2" }],
							header: true,
						},
					],
				},
				{
					class: "Block.TableRow",
					content: [
						{
							class: "Block.TableCell",
							content: [{ class: "Inline.Text", value: "value 0" }],
							header: false,
						},
						{
							class: "Block.TableCell",
							content: [{ class: "Inline.Text", value: "value 1" }],
							header: false,
						},
						{
							class: "Block.TableCell",
							content: [{ class: "Inline.Text", value: "value 2" }],
							header: false,
						},
					],
				},
			],
			content: [
				{
					content: [{ value: "Caption.", class: "Inline.Text" }],
					class: "Block.Paragraph",
				},
			],
			class: "Block.Table",
		}))
	it("toString", () =>
		expect(node.toString()).toEqual(
			"| Header 0 | Header 1 | Header 2 |\n|:--|:-:|--:|\n| value 0 | value 1 | value 2 |\nCaption."
		))
})
