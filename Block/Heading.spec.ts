import { dom } from "../index"

describe("block.Heading", () => {
	const node = new dom.Block.Heading(3, [new dom.Inline.Text("Header")])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({ class: "block.heading", level: 3, content: [{ class: "text", value: "Header" }] })
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.heading"))
	it("name", () => expect(node.content).toEqual([new dom.Inline.Text("Header")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			level: 3,
			content: [{ value: "Header", class: "text" }],
			class: "block.heading",
		}))
	it("toString", () => expect(node.toString()).toEqual("### Header"))
})
