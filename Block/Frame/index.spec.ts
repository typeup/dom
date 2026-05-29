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
			dom.Node.hydrate({
				class: "block.frame",
				source: "./frame.html",
				classes,
				content: [{ class: "inline.text", value: "Caption." }]
			})?.dehydrate()
		).toMatchObject(node.dehydrate()))
	it.each([
		["class", () => node.class, "block.frame"],
		["source", () => node.source, source],
		["classes", () => node.classes, classes],
		["content", () => node.content, content],
		["toString", () => node.toString(), "!frame ./frame.html class\nCaption."]
	])("%s", (_name, actual, expected) => expect(actual()).toEqual(expected))
	it.each([
		{ name: "parsed source", source: "./frame.html", expected: "./frame.html" },
		{ name: "fallback source", source: undefined, expected: "/" }
	])("create $name", ({ source, expected }) => {
		const hydrated = dom.Node.hydrate({
			class: "block.frame",
			source,
			classes,
			content: [{ class: "inline.text", value: "Caption." }]
		}) as dom.Block.Frame
		expect(hydrated.source.toString()).toBe(expected)
	})
	it("toObject", () =>
		expect(node.dehydrate()).toMatchObject({
			source: "./frame.html",
			classes,
			content: [{ value: "Caption.", class: "inline.text" }],
			class: "block.frame"
		}))
	it.each([
		{ name: "with classes", input: new dom.Block.Frame(source, ["class"], content).dehydrate() },
		{ name: "without classes", input: new dom.Block.Frame(source, [], content).dehydrate() }
	])("dehydrate snapshot $name", ({ input }) => expect(input).toMatchSnapshot())
})
