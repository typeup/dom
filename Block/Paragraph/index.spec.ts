import { mendly } from "mendly"
import { dom } from "../../index.js"

describe("dom.Block.Paragraph", () => {
	const node = new dom.Block.Paragraph([new dom.Inline.Text("paragraph")])
	it("constructor", () => expect(node).toBeTruthy())
	it("constructor with multiple children", () => {
		const paragraph = new dom.Block.Paragraph([
			new dom.Inline.Text("first"),
			new dom.Inline.Text(
				"second",
				new mendly.Error.Region(
					new mendly.Uri([]),
					new mendly.Error.Position(1, 1),
					new mendly.Error.Position(1, 6),
					"second"
				)
			),
			new dom.Inline.Text(
				"third",
				new mendly.Error.Region(
					new mendly.Uri([]),
					new mendly.Error.Position(1, 7),
					new mendly.Error.Position(1, 13),
					"third"
				)
			),
			new dom.Inline.Text("forth")
		])
		expect(paragraph).toMatchInlineSnapshot(`
			{
			  "class": "block.paragraph",
			  "content": [
			    {
			      "class": "inline.text",
			      "value": "first",
			    },
			    {
			      "class": "inline.text",
			      "value": "second",
			    },
			    {
			      "class": "inline.text",
			      "value": "third",
			    },
			    {
			      "class": "inline.text",
			      "value": "forth",
			    },
			  ],
			}
		`)
	})
	it("create", () =>
		expect(
			dom.Node.hydrate({ class: "block.paragraph", content: [{ class: "inline.text", value: "paragraph" }] })
		).toEqual(node))
	it("class", () => expect(node.class).toBe("block.paragraph"))
	it("name", () => expect(node.content).toEqual([new dom.Inline.Text("paragraph")]))
	it("toObject", () =>
		expect(node.dehydrate()).toEqual({
			content: [{ value: "paragraph", class: "inline.text" }],
			class: "block.paragraph"
		}))
	it("toString", () => expect(node.toString()).toEqual("paragraph"))
})
