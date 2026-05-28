import { mendly } from "mendly"
import { dom } from "../../index.js"

describe("dom.Block.Frame", () => {
	const source = new mendly.Uri(undefined, undefined, [".", "frame.html"])
	const classes = ["class"]
	const content = [new dom.Inline.Text("Caption.")]
	const node = new dom.Block.Frame(source, classes, content)
	it("constructor", () => expect(node).toBeTruthy())
	it("create", () =>
		expect(
			dom.Node.create({
				class: "block.frame",
				source: new mendly.Uri(undefined, undefined, [".", "frame.html"]),
				classes,
				content: [{ class: "inline.text", value: "Caption." }]
			})?.toObject()
		).toMatchObject(node.toObject()))
	it.each([
		["class", () => node.class, "block.frame"],
		["source", () => node.source, source],
		["classes", () => node.classes, classes],
		["content", () => node.content, content],
		["toString", () => node.toString(), "!frame ./frame.html class\nCaption."]
	])("%s", (_name, actual, expected) => expect(actual()).toEqual(expected))
	it("toObject", () =>
		expect(node.toObject()).toMatchObject({
			source: "./frame.html",
			classes,
			content: [{ value: "Caption.", class: "inline.text" }],
			class: "block.frame"
		}))
})
