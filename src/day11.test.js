import { autoComplete } from "./day11";

describe("day4: find the first missing positive integer", () => {
	const queryString = "de";
	const stringList = new Set(["dog", "deer", "deal"]);
	const expected = ["deal", "deer"];

	it(`should return all the strings in the set that have the query string as a prefix: '${(queryString,
	stringList)}'`, () => {
		expect(autoComplete(queryString, stringList)).toEqual(expected);
	});
});
