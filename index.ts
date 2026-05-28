import { Block as _Block } from "./Block/index.js"
import { Class as _Class } from "./Class/index.js"
import { Document as _Document } from "./Document/index.js"
import { File as _File } from "./File/index.js"
import { Inline as _Inline } from "./Inline/index.js"
import { Node as _Node } from "./Node/index.js"
import { Variables as _Variables } from "./Variables/index.js"

export namespace dom {
	export import Block = _Block
	export import Class = _Class
	export import Document = _Document
	export import File = _File
	export import Inline = _Inline
	export import Node = _Node
	export import Variables = _Variables
}
