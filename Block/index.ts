import { Assignment as _Assignment } from "./Assignment"
import { Block as _Block } from "./Block"
import { Chapter as _Chapter } from "./Chapter"
import { Code as _Code } from "./Code"
import { Content as _Content } from "./Content"
import { Diagram as _Diagram } from "./Diagram"
import { EmptyLine as _EmptyLine } from "./EmptyLine"
import { Figure as _Figure } from "./Figure"
import { Heading as _Heading } from "./Heading"
import { Import as _Import } from "./Import"
import { List as _List } from "./List"
import { Math as _Math } from "./Math"
import { Paragraph as _Paragraph } from "./Paragraph"
import { Section as _Section } from "./Section"
import { Table as _Table } from "./Table"
import { Video as _Video } from "./Video"

export type Block = _Block

export namespace Block {
	export import Assignment = _Assignment
	export import Chapter = _Chapter
	export import Code = _Code
	export import Content = _Content
	export import Diagram = _Diagram
	export import EmptyLine = _EmptyLine
	export import Figure = _Figure
	export import Heading = _Heading
	export import Import = _Import
	export import List = _List
	export import Math = _Math
	export import Paragraph = _Paragraph
	export import Section = _Section
	export import Table = _Table
	export import Video = _Video
}
