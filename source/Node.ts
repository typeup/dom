import { Error } from "@cogneco/mend"

export abstract class Node {
	abstract readonly class: string
	protected constructor(readonly region: Error.Region) {
	}
	toObject(): { class: string } & any {
		return { class: this.class }
	}
}
