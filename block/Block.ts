import { mendly } from "mendly";
import { Node } from "../Node";

export abstract class Block extends Node {
	constructor(region?: mendly.Error.Region) {
		super(region);
	}
}
