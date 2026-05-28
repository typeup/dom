import { Assignment as _Assignment } from "./Assignment/index.js"
import { Block as _Block } from "./Block.js"
import { Chapter as _Chapter } from "./Chapter/index.js"
import { Code as _Code } from "./Code/index.js"
import { Content as _Content } from "./Content.js"
import { Diagram as _Diagram } from "./Diagram/index.js"
import { EmptyLine as _EmptyLine } from "./EmptyLine/index.js"
import { Figure as _Figure } from "./Figure/index.js"
import { Frame as _Frame } from "./Frame/index.js"
import { Heading as _Heading } from "./Heading/index.js"
import { Import as _Import } from "./Import/index.js"
import { List as _List } from "./List/index.js"
import { Math as _Math } from "./Math/index.js"
import { Paragraph as _Paragraph } from "./Paragraph/index.js"
import { Quote as _Quote } from "./Quote/index.js"
import { Section as _Section } from "./Section/index.js"
import { Table as _Table } from "./Table/index.js"
import { Video as _Video } from "./Video/index.js"

export type Block = _Block

export namespace Block {
	export import Assignment = _Assignment
	export import Chapter = _Chapter
	export import Code = _Code
	export import Content = _Content
	export import Diagram = _Diagram
	export import EmptyLine = _EmptyLine
	export import Figure = _Figure
	export import Frame = _Frame
	export import Heading = _Heading
	export import Import = _Import
	export import List = _List
	export import Math = _Math
	export import Paragraph = _Paragraph
	export import Quote = _Quote
	export import Section = _Section
	export import Table = _Table
	export import Video = _Video
}
