import { dom } from "../index"

describe("dom.Node", () => {
	const nodes = {
		inline: {
			text: [
				new dom.Inline.Text("Hello"),
				new dom.Inline.Text("First"),
				new dom.Inline.Text("Second"),
				new dom.Inline.Text("Third"),
				new dom.Inline.Text("First"),
				new dom.Inline.Text("Second"),
				new dom.Inline.Text("Third")
			],
			code: [new dom.Inline.Code("console.log"), new dom.Inline.Code("code1"), new dom.Inline.Code("code2")],
			link: [new dom.Inline.Link("https://example.com", [new dom.Inline.Text("Example")])]
		},
		block: {
			heading: [new dom.Block.Heading(1, [new dom.Inline.Text("Title")])],
			paragraph: [new dom.Block.Paragraph([new dom.Inline.Text("Content")])],
			emptyLine: [new dom.Block.EmptyLine()],
			math: [new dom.Block.Math("E = mc^2", [new dom.Inline.Text("formula")])]
		}
	} as const

	it.each([
		{
			name: "basic split",
			nodes: [nodes.inline.text[0], nodes.block.heading[0], nodes.block.paragraph[0]],
			classes: ["inline.text", "block.paragraph"],
			expected: {
				"inline.text": [nodes.inline.text[0]],
				"block.paragraph": [nodes.block.paragraph[0]],
				other: [nodes.block.heading[0]]
			}
		},
		{
			name: "all match",
			nodes: [nodes.inline.text[0], nodes.inline.code[0]],
			classes: ["inline.text", "inline.code"],
			expected: { "inline.text": [nodes.inline.text[0]], "inline.code": [nodes.inline.code[0]] }
		},
		{
			name: "none match",
			nodes: [nodes.inline.text[0], nodes.inline.code[0], nodes.block.heading[0]],
			classes: ["block.paragraph", "block.emptyLine"],
			expected: { other: [nodes.inline.text[0], nodes.inline.code[0], nodes.block.heading[0]] }
		},
		{ name: "empty nodes", nodes: [], classes: ["inline.text", "block.paragraph"], expected: {} },
		{
			name: "no classes",
			nodes: [nodes.inline.text[0], nodes.block.heading[0]],
			classes: [],
			expected: { other: [nodes.inline.text[0], nodes.block.heading[0]] }
		},
		{
			name: "groups multiple nodes",
			nodes: [
				nodes.inline.text[1],
				nodes.block.heading[0],
				nodes.inline.text[2],
				nodes.block.paragraph[0],
				nodes.inline.text[3]
			],
			classes: ["inline.text"],
			expected: {
				"inline.text": [nodes.inline.text[1], nodes.inline.text[2], nodes.inline.text[3]],
				other: [nodes.block.heading[0], nodes.block.paragraph[0]]
			}
		},
		{
			name: "preserves order",
			nodes: [
				nodes.inline.text[4],
				nodes.inline.code[1],
				nodes.inline.text[5],
				nodes.inline.code[2],
				nodes.inline.text[6]
			],
			classes: ["inline.text"],
			expected: {
				"inline.text": [nodes.inline.text[4], nodes.inline.text[5], nodes.inline.text[6]],
				other: [nodes.inline.code[1], nodes.inline.code[2]]
			}
		},
		{
			name: "complex scenario",
			nodes: [
				nodes.inline.text[0],
				nodes.block.heading[0],
				nodes.block.paragraph[0],
				nodes.inline.code[0],
				nodes.block.emptyLine[0],
				nodes.block.math[0],
				nodes.inline.link[0]
			],
			classes: ["inline.text", "inline.code", "block.heading", "block.math"],
			expected: {
				"inline.text": [nodes.inline.text[0]],
				"inline.code": [nodes.inline.code[0]],
				"block.heading": [nodes.block.heading[0]],
				"block.math": [nodes.block.math[0]],
				other: [nodes.block.paragraph[0], nodes.block.emptyLine[0], nodes.inline.link[0]]
			}
		},
		{
			name: "skips undefined entries",
			nodes: [nodes.inline.text[0], undefined, nodes.inline.code[0], undefined, nodes.inline.text[1]],
			classes: ["inline.text", "inline.code"],
			expected: { "inline.text": [nodes.inline.text[0], nodes.inline.text[1]], "inline.code": [nodes.inline.code[0]] }
		}
	] as Array<{
		name: string
		nodes: Array<dom.Node | undefined>
		classes: dom.Class[]
		expected: Partial<Record<dom.Class | "other", dom.Node[]>>
	}>)("split $name", ({ nodes: testNodes, classes, expected }) =>
		expect(dom.Node.split(testNodes, ...classes)).toEqual(expected))
})
