import * as dom from "../index"

describe("block.Table", () => {
	const node = new dom.block.Table(
		["left", "center", "right"],
		[
			new dom.block.TableRow([
				new dom.block.TableCell(true, [new dom.inline.Text("Header 0")]),
				new dom.block.TableCell(true, [new dom.inline.Text("Header 1")]),
				new dom.block.TableCell(true, [new dom.inline.Text("Header 2")]),
			]),
			new dom.block.TableRow([
				new dom.block.TableCell(false, [new dom.inline.Text("value 0")]),
				new dom.block.TableCell(false, [new dom.inline.Text("value 1")]),
				new dom.block.TableCell(false, [new dom.inline.Text("value 2")]),
			]),
		],
		[new dom.block.Paragraph([new dom.inline.Text("Caption.")])]
	)
	it("constructor", () => expect(node).toBeTruthy())
	it("class", () => expect(node.class).toBe("Block.Table"))
	it("alignments", () => expect(node.alignments).toEqual(["left", "center", "right"]))
	it("rows", () =>
		expect(node.rows).toEqual([
			new dom.block.TableRow([
				new dom.block.TableCell(true, [new dom.inline.Text("Header 0")]),
				new dom.block.TableCell(true, [new dom.inline.Text("Header 1")]),
				new dom.block.TableCell(true, [new dom.inline.Text("Header 2")]),
			]),
			new dom.block.TableRow([
				new dom.block.TableCell(false, [new dom.inline.Text("value 0")]),
				new dom.block.TableCell(false, [new dom.inline.Text("value 1")]),
				new dom.block.TableCell(false, [new dom.inline.Text("value 2")]),
			]),
		]))
	it("content", () => expect(node.content).toEqual([new dom.block.Paragraph([new dom.inline.Text("Caption.")])]))
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
