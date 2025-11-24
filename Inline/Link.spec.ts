import { dom } from "../index"

describe("dom.Inline.Link", () => {
	const node = new dom.Inline.Link("https://github.com/typeup/", [new dom.Inline.Text("TypeUp")])
	it("create", () =>
		expect(
			dom.Node.create({
				class: "inline.link",
				target: "https://github.com/typeup/",
				content: [{ class: "inline.text", value: "TypeUp" }],
			})
		).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("inline.link")
		expect(node.target).toBe("https://github.com/typeup/")
		expect(node.content).toEqual([new dom.Inline.Text("TypeUp")])
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "inline.link",
			target: "https://github.com/typeup/",
			content: [{ class: "inline.text", value: "TypeUp" }],
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("[https://github.com/typeup/ TypeUp]")
	})
})
