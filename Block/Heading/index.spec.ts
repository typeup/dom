import { dom } from "../../index.js"

describe("dom.Block.Heading", () => {
	const node = new dom.Block.Heading(3, [new dom.Inline.Text("Header")])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.hydrate({ class: "block.heading", level: 3, content: [{ class: "inline.text", value: "Header" }] })
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.heading"))
	it("name", () => expect(node.content).toEqual([new dom.Inline.Text("Header")]))
	it("toObject", () =>
		expect(node.dehydrate()).toEqual({
			level: 3,
			content: [{ value: "Header", class: "inline.text" }],
			class: "block.heading"
		}))
	it("toString", () => expect(node.toString()).toEqual("### Header"))
})
