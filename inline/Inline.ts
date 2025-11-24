import { mendly } from "mendly";
import { Node } from "../Node";

export abstract class Inline extends Node {
	constructor(region?: mendly.Error.Region) {
		super(region);
	}
}
