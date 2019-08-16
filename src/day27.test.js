import { balancedBrackets } from "./day27";

describe("day4: find the first missing positive integer", () => {
	const inputValid = "([])[]({})";
	const expectedValid = true;

	const inputNotValid = "([)]";
	const expectedNotValid = false;

	it(`should return that the brackets are balanced (well-formed): '${inputValid}'`, () => {
		expect(balancedBrackets(inputValid)).toEqual(expectedValid);
	});

	it(`should return that the brackets are not balanced (well-formed): '${inputNotValid}'`, () => {
		expect(balancedBrackets(inputNotValid)).toEqual(expectedNotValid);
	});
});
