import { editDistance } from "./day31";

describe("day4: find the first missing positive integer", () => {
	const s1 = "kitten";
	const s2 = "sitting";
	const result = 3;

	it(`should return the edit distance between two strings: '${result}'`, () => {
		expect(editDistance(s1, s2)).toEqual(result);
	});

	it(`should return the edit distance of the non empty string: '${result}'`, () => {
		expect(editDistance(s1, "")).toEqual(s1.length);
	});
});
