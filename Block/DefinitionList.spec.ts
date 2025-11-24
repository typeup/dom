import { dom } from "../index"

describe("block.DefinitionList", () => {
	const node = new dom.Block.DefinitionList([
		new dom.Block.DefinitionTerm(
			[new dom.Inline.Text("Alpha")],
			[
				new dom.Block.DefinitionData([new dom.Inline.Text("Term A")]),
				new dom.Block.DefinitionData([new dom.Inline.Text("First Term")]),
			]
		),
	])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "Block.DefinitionList",
				content: [
					{
						class: "Block.DefinitionTerm",
						content: [{ class: "Inline.Text", value: "Alpha" }],
						data: [
							{ class: "Block.DefinitionData", content: [{ class: "Inline.Text", value: "Term A" }] },
							{ class: "Block.DefinitionData", content: [{ class: "Inline.Text", value: "First Term" }] },
						],
					},
				],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.DefinitionList"))
	it("name", () =>
		expect(node.content).toEqual([
			new dom.Block.DefinitionTerm(
				[new dom.Inline.Text("Alpha")],
				[
					new dom.Block.DefinitionData([new dom.Inline.Text("Term A")]),
					new dom.Block.DefinitionData([new dom.Inline.Text("First Term")]),
				]
			),
		]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [
				{
					content: [{ value: "Alpha", class: "Inline.Text" }],
					data: [
						{
							content: [{ value: "Term A", class: "Inline.Text" }],
							class: "Block.DefinitionData",
						},
						{
							content: [{ value: "First Term", class: "Inline.Text" }],
							class: "Block.DefinitionData",
						},
					],
					class: "Block.DefinitionTerm",
				},
			],
			class: "Block.DefinitionList",
		}))
	it("toString", () => expect(node.toString()).toEqual("Alpha\n: Term A\n: First Term"))
})
