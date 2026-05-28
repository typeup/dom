import { Code as _Code } from "./Code/index.js"
import { Content as _Content } from "./Content.js"
import { Emphasize as _Emphasize } from "./Emphasize/index.js"
import { Inline as _Inline } from "./Inline.js"
import { Link as _Link } from "./Link/index.js"
import { Math as _Math } from "./Math/index.js"
import { Quote as _Quote } from "./Quote/index.js"
import { Text as _Text } from "./Text/index.js"

export type Inline = _Inline

export namespace Inline {
	export import Code = _Code
	export import Content = _Content
	export import Emphasize = _Emphasize
	export import Link = _Link
	export import Math = _Math
	export import Quote = _Quote
	export import Text = _Text
}
