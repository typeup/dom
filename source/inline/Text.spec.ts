import * as inline from "."

describe("Text", () => {
	it("create", () => {
		const node = new inline.Text("value")
		expect(node.class).toBe("Text")
		expect(node.value).toBe("value")
	})
})
