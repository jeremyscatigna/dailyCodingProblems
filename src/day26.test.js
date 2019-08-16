import { removeKthElement, Node } from "./day26";

describe("day4: find the first missing positive integer", () => {
	const head = new Node(1, n1);
	const n1 = new Node(2, n2);
	const n2 = new Node(3, n3);
	const n3 = new Node(4, n4);
	const n4 = new Node(5, null);

	const k = 2;
	const result = 3;

	it(`should remove the kth element of the list: '${head}'`, () => {
		expect(removeKthElement(head, k)).toEqual(result);
	});
});
