import { dom } from "../index"

describe("link", () => {
	const node = new dom.Inline.Link("https://github.com/typeup/", [new dom.Inline.Text("TypeUp")])
	it("create", () =>
		expect(
			dom.Node.create({
				class: "link",
				target: "https://github.com/typeup/",
				content: [{ class: "text", value: "TypeUp" }],
			})
		).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("link")
		expect(node.target).toBe("https://github.com/typeup/")
		expect(node.content).toEqual([new dom.Inline.Text("TypeUp")])
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "link",
			target: "https://github.com/typeup/",
			content: [{ class: "text", value: "TypeUp" }],
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("[https://github.com/typeup/ TypeUp]")
	})
})
