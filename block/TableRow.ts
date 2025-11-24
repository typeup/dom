import { mendly } from "mendly";
import { Node, register } from "../Node";
import { Content } from "./Content";
import { TableCell } from "./TableCell";

export class TableRow extends Content<TableCell> {
	readonly class: string = "Block.TableRow";
	constructor(content: TableCell[], region?: mendly.Error.Region) {
		super(content, region);
	}
}
register(
	"Block.TableRow",
	(data) => new TableRow(data.content.map(Node.create))
);
