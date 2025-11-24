import { Code as _Code } from "./Code"
import { Content as _Content } from "./Content"
import { Emphasize as _Emphasize } from "./Emphasize"
import { Inline as _Inline } from "./Inline"
import { Link as _Link } from "./Link"
import { Math as _Math } from "./Math"
import { Text as _Text } from "./Text"

export type Inline = _Inline

export namespace Inline {
	export import Code = _Code
	export import Content = _Content
	export import Emphasize = _Emphasize
	export import Link = _Link
	export import Math = _Math
	export import Text = _Text
}
