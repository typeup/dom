import * as inline from "."

const node = new inline.Link("https://github.com/typeup/", [ new inline.Text("TypeUp") ])

describe("Link", () => {
	it("properties", () => {
		expect(node.class).toBe("Link")
		expect(node.target).toBe("https://github.com/typeup/")
		expect(node.content).toEqual([ new inline.Text("TypeUp") ])
	})
	it("toObject", () => {
		expect(node.toObject()).toEqual({
			class: "Link",
			target: "https://github.com/typeup/",
			content: [
				{ class: "Text", value: "TypeUp" },
			],
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("[https://github.com/typeup/ TypeUp]")
	})
})
