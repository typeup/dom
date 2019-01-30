import { Error } from "@cogneco/mend"
import { Node } from "../Node"

export abstract class Block extends Node {
	constructor(region: Error.Region) {
		super(region)
	}
}
