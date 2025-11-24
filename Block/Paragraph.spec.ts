import { mendly } from "mendly"
import { dom } from "../index"

describe("block.Paragraph", () => {
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
			new dom.Inline.Text("forth"),
		])
		expect(paragraph).toMatchInlineSnapshot(`
			Paragraph {
			  "class": "Block.Paragraph",
			  "content": [
			    Text {
			      "class": "Inline.Text",
			      "region": undefined,
			      "value": "first",
			    },
			    Text {
			      "class": "Inline.Text",
			      "region": Region {
			        "content": "second",
			        "end": Position {
			          "column": 6,
			          "line": 1,
			        },
			        "resource": Uri {
			          "authority": Authority {
			            "endpoint": Endpoint {
			              "host": [],
			              "port": undefined,
			            },
			            "user": User {
			              "name": undefined,
			              "password": undefined,
			            },
			          },
			          "fragment": undefined,
			          "path": [],
			          "query": {},
			          "scheme": [],
			        },
			        "start": Position {
			          "column": 1,
			          "line": 1,
			        },
			      },
			      "value": "second",
			    },
			    Text {
			      "class": "Inline.Text",
			      "region": Region {
			        "content": "third",
			        "end": Position {
			          "column": 13,
			          "line": 1,
			        },
			        "resource": Uri {
			          "authority": Authority {
			            "endpoint": Endpoint {
			              "host": [],
			              "port": undefined,
			            },
			            "user": User {
			              "name": undefined,
			              "password": undefined,
			            },
			          },
			          "fragment": undefined,
			          "path": [],
			          "query": {},
			          "scheme": [],
			        },
			        "start": Position {
			          "column": 7,
			          "line": 1,
			        },
			      },
			      "value": "third",
			    },
			    Text {
			      "class": "Inline.Text",
			      "region": undefined,
			      "value": "forth",
			    },
			  ],
			  "region": Region {
			    "content": "second",
			    "end": Position {
			      "column": 13,
			      "line": 1,
			    },
			    "resource": Uri {
			      "authority": Authority {
			        "endpoint": Endpoint {
			          "host": [],
			          "port": undefined,
			        },
			        "user": User {
			          "name": undefined,
			          "password": undefined,
			        },
			      },
			      "fragment": undefined,
			      "path": [],
			      "query": {},
			      "scheme": [],
			    },
			    "start": Position {
			      "column": 1,
			      "line": 1,
			    },
			  },
			}
		`)
	})
	it("create", () =>
		expect(
			dom.Node.create({ class: "Block.Paragraph", content: [{ class: "Inline.Text", value: "paragraph" }] })
		).toEqual(node))
	it("class", () => expect(node.class).toBe("Block.Paragraph"))
	it("name", () => expect(node.content).toEqual([new dom.Inline.Text("paragraph")]))
	it("toObject", () =>
		expect(node.toObject()).toEqual({
			content: [{ value: "paragraph", class: "Inline.Text" }],
			class: "Block.Paragraph",
		}))
	it("toString", () => expect(node.toString()).toEqual("paragraph"))
})
