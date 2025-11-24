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
				class: "block.list.definition",
				content: [
					{
						class: "block.list.definition.term",
						content: [{ class: "inline.text", value: "Alpha" }],
						data: [
							{ class: "block.list.definition.data", content: [{ class: "inline.text", value: "Term A" }] },
							{ class: "block.list.definition.data", content: [{ class: "inline.text", value: "First Term" }] },
						],
					},
				],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.list.definition"))
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
					content: [{ value: "Alpha", class: "inline.text" }],
					data: [
						{
							content: [{ value: "Term A", class: "inline.text" }],
							class: "block.list.definition.data",
						},
						{
							content: [{ value: "First Term", class: "inline.text" }],
							class: "block.list.definition.data",
						},
					],
					class: "block.list.definition.term",
				},
			],
			class: "block.list.definition",
		}))
	it("toString", () => expect(node.toString()).toEqual("Alpha\n: Term A\n: First Term"))
})
