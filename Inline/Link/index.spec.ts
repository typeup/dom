import { dom } from "../../index.js"

describe("dom.Inline.Link", () => {
	const node = new dom.Inline.Link("https://github.com/typeup/", [new dom.Inline.Text("TypeUp")])
	it("create", () =>
		expect(
			dom.Node.hydrate({
				class: "inline.link",
				target: "https://github.com/typeup/",
				content: [{ class: "inline.text", value: "TypeUp" }]
			})
		).toEqual(node))
	it("properties", () => {
		expect(node.class).toBe("inline.link")
		expect(node.target).toBe("https://github.com/typeup/")
		expect(node.flags).toEqual([])
		expect(node.content).toEqual([new dom.Inline.Text("TypeUp")])
	})
	it("toObject", () => {
		expect(node.dehydrate()).toEqual({
			class: "inline.link",
			target: "https://github.com/typeup/",
			content: [{ class: "inline.text", value: "TypeUp" }]
		})
	})
	it("toString", () => {
		expect(node.toString()).toEqual("[https://github.com/typeup/ TypeUp]")
	})
	it("namespace", () => expect(dom.Inline.Link.Flag).toBeTruthy())
	describe("flags", () => {
		describe("blank", () => {
			const node = new dom.Inline.Link("https://github.com/typeup/", [new dom.Inline.Text("TypeUp")], ["blank"])
			it("create", () =>
				expect(
					dom.Node.hydrate({
						class: "inline.link",
						target: "https://github.com/typeup/",
						flags: ["blank"],
						content: [{ class: "inline.text", value: "TypeUp" }]
					})
				).toEqual(node))
			it("properties", () => {
				expect(node.flags).toEqual(["blank"])
			})
			it("toObject", () => {
				expect(node.dehydrate()).toEqual({
					class: "inline.link",
					target: "https://github.com/typeup/",
					flags: ["blank"],
					content: [{ class: "inline.text", value: "TypeUp" }]
				})
			})
			it("toString", () => {
				expect(node.toString()).toEqual("[https://github.com/typeup/|blank TypeUp]")
			})
		})
		describe("download", () => {
			const node = new dom.Inline.Link(
				"https://github.com/typeup/file.pdf",
				[new dom.Inline.Text("Get PDF")],
				["download"]
			)
			it("toObject", () => {
				expect(node.dehydrate()).toEqual({
					class: "inline.link",
					target: "https://github.com/typeup/file.pdf",
					flags: ["download"],
					content: [{ class: "inline.text", value: "Get PDF" }]
				})
			})
			it("toString", () => {
				expect(node.toString()).toEqual("[https://github.com/typeup/file.pdf|download Get PDF]")
			})
		})
		describe("blank and download", () => {
			const node = new dom.Inline.Link(
				"https://github.com/typeup/file.pdf",
				[new dom.Inline.Text("Get PDF")],
				["blank", "download"]
			)
			it("create", () =>
				expect(
					dom.Node.hydrate({
						class: "inline.link",
						target: "https://github.com/typeup/file.pdf",
						flags: ["blank", "download"],
						content: [{ class: "inline.text", value: "Get PDF" }]
					})
				).toEqual(node))
			it("toString", () => {
				expect(node.toString()).toEqual("[https://github.com/typeup/file.pdf|blank|download Get PDF]")
			})
			it("toObject", () => {
				expect(node.dehydrate()).toEqual({
					class: "inline.link",
					target: "https://github.com/typeup/file.pdf",
					flags: ["blank", "download"],
					content: [{ class: "inline.text", value: "Get PDF" }]
				})
			})
		})
	})
})
