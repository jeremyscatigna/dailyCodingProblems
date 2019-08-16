import { firstMissingInteger } from "./day4";

describe("day4: find the first missing positive integer", () => {
	const input = [1, 2, 0];
	const expected = 3;

	it(`input should equal to expected: '${input}'`, () => {
		expect(firstMissingInteger(input)).toEqual(expected);
	});
});
