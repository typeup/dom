import { dom } from "../../../index"

describe("dom.Block.List.Definition", () => {
	const node = new dom.Block.List.Definition([
		new dom.Block.List.Definition.Term(
			[new dom.Inline.Text("Alpha")],
			[
				new dom.Block.List.Definition.Data([new dom.Inline.Text("Term A")]),
				new dom.Block.List.Definition.Data([new dom.Inline.Text("First Term")]),
			]
		),
	])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Block.List.Definition",
				content: [
					{
						class: "Block.List.Definition.Term",
						content: [{ class: "Text", value: "Alpha" }],
						data: [
							{ class: "Block.List.Definition.Data", content: [{ class: "Text", value: "Term A" }] },
							{ class: "Block.List.Definition.Data", content: [{ class: "Text", value: "First Term" }] },
						],
					},
				],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.List.Definition"))
	it("name", () =>
		expect(node.content).toEqual([
			new dom.Block.List.Definition.Term(
				[new dom.Inline.Text("Alpha")],
				[
					new dom.Block.List.Definition.Data([new dom.Inline.Text("Term A")]),
					new dom.Block.List.Definition.Data([new dom.Inline.Text("First Term")]),
				]
			),
		]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [
				{
					content: [{ value: "Alpha", class: "Text" }],
					data: [
						{
							content: [{ value: "Term A", class: "Text" }],
							class: "Block.List.Definition.Data",
						},
						{
							content: [{ value: "First Term", class: "Text" }],
							class: "Block.List.Definition.Data",
						},
					],
					class: "Block.List.Definition.Term",
				},
			],
			class: "Block.List.Definition",
		}))
	it("toString", () => expect(node.toString()).toEqual("Alpha\n: Term A\n: First Term"))
})
