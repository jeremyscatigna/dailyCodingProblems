import { Node, Tree } from "./day3";

describe("day3: serialize and deserialize Tree", () => {
	const node = new Node(
		"root",
		new Node("left", new Node("left.left")),
		new Node("right")
	);

	const tree = new Tree();

	it(`node should equal to itself when deserializing a serilization: '${node}'`, () => {
		expect(tree.deserialize(tree.serialize(node))).toEqual(node);
	});
});
