import { dom } from "../index"

describe("block.Diagram", () => {
	const node = new dom.Block.Diagram("<svg></svg>", [new dom.Inline.Text("Caption.")])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.diagram",
				value: "<svg></svg>",
				content: [{ class: "text", value: "Caption." }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.diagram"))
	it("value", () => expect(node.value).toEqual("<svg></svg>"))
	it("content", () => expect(node.content).toEqual([new dom.Inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			value: "<svg></svg>",
			content: [{ value: "Caption.", class: "text" }],
			class: "block.diagram",
		}))
	it("toString", () => expect(node.toString()).toEqual("++\n<svg></svg>\n++\nCaption."))
})
