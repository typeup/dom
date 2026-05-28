import { dom } from "../../index.js"

const paragraph = new dom.Block.Paragraph([new dom.Inline.Text("To be or not to be.")])
const paragraphObject = { class: "block.paragraph", content: [{ class: "inline.text", value: "To be or not to be." }] }
const attribution = [
	new dom.Inline.Text("William Shakespeare, "),
	new dom.Inline.Emphasize([new dom.Inline.Text("Hamlet")])
]
const attributionObject = [
	{ class: "inline.text", value: "William Shakespeare, " },
	{ class: "inline.emphasize", content: [{ class: "inline.text", value: "Hamlet" }] }
]

describe("dom.Block.Quote", () => {
	it.each([
		{
			label: "no cite, no attribution",
			node: new dom.Block.Quote([paragraph]),
			cite: undefined,
			attribution: undefined
		},
		{
			label: "cite only",
			node: new dom.Block.Quote([paragraph], "https://example.com"),
			cite: "https://example.com",
			attribution: undefined
		},
		{
			label: "attribution only",
			node: new dom.Block.Quote([paragraph], undefined, attribution),
			cite: undefined,
			attribution
		},
		{
			label: "cite and attribution",
			node: new dom.Block.Quote([paragraph], "https://example.com", attribution),
			cite: "https://example.com",
			attribution
		}
	])("$label", ({ node, cite, attribution: expectedAttribution }) =>
		expect(node).toMatchObject({ class: "block.quote", content: [paragraph], cite, attribution: expectedAttribution }))
	it.each([
		{
			label: "no cite, no attribution",
			node: new dom.Block.Quote([paragraph]),
			expected: { class: "block.quote", content: [paragraphObject] }
		},
		{
			label: "cite only",
			node: new dom.Block.Quote([paragraph], "https://example.com"),
			expected: { class: "block.quote", content: [paragraphObject], cite: "https://example.com" }
		},
		{
			label: "attribution only",
			node: new dom.Block.Quote([paragraph], undefined, attribution),
			expected: { class: "block.quote", content: [paragraphObject], attribution: attributionObject }
		},
		{
			label: "cite and attribution",
			node: new dom.Block.Quote([paragraph], "https://example.com", attribution),
			expected: {
				class: "block.quote",
				content: [paragraphObject],
				cite: "https://example.com",
				attribution: attributionObject
			}
		}
	])("toObject $label", ({ node, expected }) => expect(node.toObject()).toEqual(expected))
	it.each([
		{
			label: "no cite, no attribution",
			node: new dom.Block.Quote([paragraph]),
			expected: '"""\nTo be or not to be.\n"""'
		},
		{
			label: "cite only",
			node: new dom.Block.Quote([paragraph], "https://example.com"),
			expected: '"""\nTo be or not to be.\n""" https://example.com'
		},
		{
			label: "attribution only",
			node: new dom.Block.Quote([paragraph], undefined, attribution),
			expected: '"""\nTo be or not to be.\n"""\nWilliam Shakespeare, _Hamlet_'
		},
		{
			label: "cite and attribution",
			node: new dom.Block.Quote([paragraph], "https://example.com", attribution),
			expected: '"""\nTo be or not to be.\n""" https://example.com\nWilliam Shakespeare, _Hamlet_'
		}
	])("toString $label", ({ node, expected }) => expect(node.toString()).toBe(expected))
	it.each([
		{
			label: "no cite, no attribution",
			data: { class: "block.quote", content: [paragraphObject] },
			expected: new dom.Block.Quote([paragraph])
		},
		{
			label: "cite only",
			data: { class: "block.quote", content: [paragraphObject], cite: "https://example.com" },
			expected: new dom.Block.Quote([paragraph], "https://example.com")
		},
		{
			label: "attribution only",
			data: { class: "block.quote", content: [paragraphObject], attribution: attributionObject },
			expected: new dom.Block.Quote([paragraph], undefined, attribution)
		},
		{
			label: "cite and attribution",
			data: {
				class: "block.quote",
				content: [paragraphObject],
				cite: "https://example.com",
				attribution: attributionObject
			},
			expected: new dom.Block.Quote([paragraph], "https://example.com", attribution)
		}
	])("create $label", ({ data, expected }) => expect(dom.Node.create(data)).toEqual(expected))
})
