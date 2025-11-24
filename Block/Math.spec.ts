import { dom } from "../index"

describe("dom.Block.Math", () => {
	const node = new dom.Block.Math("a^2 + b^2 = c^2", [new dom.Inline.Text("Caption.")])
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.math",
				value: "a^2 + b^2 = c^2",
				content: [{ class: "inline.text", value: "Caption." }],
			})
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.math"))
	it("name", () => expect(node.content).toEqual([new dom.Inline.Text("Caption.")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			value: "a^2 + b^2 = c^2",
			content: [{ value: "Caption.", class: "inline.text" }],
			class: "block.math",
		}))
	it("toString", () => expect(node.toString()).toEqual("$$\na^2 + b^2 = c^2\n$$\nCaption."))
})
