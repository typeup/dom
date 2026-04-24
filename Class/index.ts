import type { Block } from "../Block"
import type { Document } from "../Document"
import type { File } from "../File"
import type { Inline } from "../Inline"
import type { Node } from "../Node"

export type Class = typeof Class.values[number]

export namespace Class {
	export const values = [
		"block.assignment",
		"block.chapter",
		"block.code",
		"block.diagram",
		"block.emptyLine",
		"block.figure",
		"block.heading",
		"block.import",
		"block.list.definition",
		"block.list.definition.data",
		"block.list.definition.term",
		"block.list.item",
		"block.list.ordered",
		"block.list.unordered",
		"block.math",
		"block.paragraph",
		"block.section",
		"block.table",
		"block.table.cell",
		"block.table.row",
		"block.video",
		"document",
		"file",
		"inline.code",
		"inline.emphasize",
		"inline.link",
		"inline.math",
		"inline.text",
	] as const
	export type Types = {
		"block.assignment": Block.Assignment
		"block.chapter": Block.Chapter
		"block.code": Block.Code
		"block.diagram": Block.Diagram
		"block.emptyLine": Block.EmptyLine
		"block.figure": Block.Figure
		"block.heading": Block.Heading
		"block.import": Block.Import
		"block.list.definition": Block.List.Definition
		"block.list.definition.data": Block.List.Definition.Data
		"block.list.definition.term": Block.List.Definition.Term
		"block.list.item": Block.List.Item
		"block.list.ordered": Block.List.Ordered
		"block.list.unordered": Block.List.Unordered
		"block.math": Block.Math
		"block.paragraph": Block.Paragraph
		"block.section": Block.Section
		"block.table": Block.Table
		"block.table.cell": Block.Table.Cell
		"block.table.row": Block.Table.Row
		"block.video": Block.Video
		document: Document
		file: File
		"inline.code": Inline.Code
		"inline.emphasize": Inline.Emphasize
		"inline.link": Inline.Link
		"inline.math": Inline.Math
		"inline.text": Inline.Text
		other: Node
	}
}
