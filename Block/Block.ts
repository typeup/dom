import { mendly } from "mendly"
import { Node } from "../Node/index.js"

export abstract class Block extends Node {
	constructor(region?: mendly.Error.Region) {
		super(region)
	}
}

export namespace Block {}
