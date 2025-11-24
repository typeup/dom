import { mendly } from "mendly";

export abstract class Node {
	abstract readonly class: string;
	protected constructor(readonly region?: mendly.Error.Region) {}
	toObject(): { class: string } & any {
		return { class: this.class };
	}
	static create(data: { class: string } & any): Node | undefined {
		const creator = creators[data.class];
		return creator?.(data);
	}
}
export type Creator = (data: { class: string } & any) => Node;
const creators: { [name: string]: Creator | undefined } = {};
export function register(name: string, creator: Creator) {
	creators[name] = creator;
}
