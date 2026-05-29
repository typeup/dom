import { dom } from "../../index.js"

const text = new dom.Inline.Text("TypeUp")
const node = new dom.Inline.Quote([text])

describe("dom.Inline.Quote", () => {
	it("create", () =>
		expect(dom.Node.hydrate({ class: "inline.quote", content: [{ class: "inline.text", value: "TypeUp" }] })).toEqual(
			node
		))
	it.each([
		{ property: "class", expected: "inline.quote" },
		{ property: "content", expected: [text] }
	])("$property", ({ property, expected }) => expect(node[property as keyof typeof node]).toEqual(expected))
	it("toObject", () =>
		expect(node.dehydrate()).toEqual({ class: "inline.quote", content: [{ class: "inline.text", value: "TypeUp" }] }))
	it("toString", () => expect(node.toString()).toEqual('"TypeUp"'))
})
