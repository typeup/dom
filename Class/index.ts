import type { Block } from "../Block"
import type { Document } from "../Document"
import type { File } from "../File"
import type { Inline } from "../Inline"
import type { Node } from "../Node"

export type Class = (typeof Class.values)[number]

export namespace Class {
	export const values = [
		"block",
		"block.assignment",
		"block.chapter",
		"block.code",
		"block.diagram",
		"block.emptyLine",
		"block.figure",
		"block.frame",
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
		"block.quote",
		"block.section",
		"block.table",
		"block.table.cell",
		"block.table.row",
		"block.video",
		"document",
		"file",
		"inline",
		"inline.code",
		"inline.emphasize",
		"inline.link",
		"inline.math",
		"inline.quote",
		"inline.text",
		"other"
	] as const
	export type Types = {
		block: Block
		"block.assignment": Block.Assignment
		"block.chapter": Block.Chapter
		"block.code": Block.Code
		"block.diagram": Block.Diagram
		"block.emptyLine": Block.EmptyLine
		"block.figure": Block.Figure
		"block.frame": Block.Frame
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
		"block.quote": Block.Quote
		"block.section": Block.Section
		"block.table": Block.Table
		"block.table.cell": Block.Table.Cell
		"block.table.row": Block.Table.Row
		"block.video": Block.Video
		document: Document
		file: File
		inline: Inline
		"inline.code": Inline.Code
		"inline.emphasize": Inline.Emphasize
		"inline.link": Inline.Link
		"inline.math": Inline.Math
		"inline.quote": Inline.Quote
		"inline.text": Inline.Text
		other: Node
	}
}
