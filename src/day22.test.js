import { wordFromString } from "./day22";

describe("day4: find the first missing positive integer", () => {
	const wordsSet = new Set(["quick", "brown", "the", "fox"]);
	const str = "thequickbrownfox";
	const expected = ["the", "quick", "brown", "fox"];

	const wordsSetThatNotWork = new Set(["quick", "brown", "the", "fox"]);
	const strThatNotWork = "theteabrownfox";

	const wordsSetMultiplePossibilities = new Set([
		"bed",
		"bath",
		"bedbath",
		"and",
		"beyond"
	]);
	const strMultiplePossibilities = "bedbathandbeyond";
	const expectedMultiplePossibilities = ["bed", "bath", "and", "beyond"];

	it(`output should equal to the sentence based on words from the list in the string: '${wordsSet}'`, () => {
		expect(wordFromString(wordsSet, str)).toEqual(expected);
	});

	it(`If there is no possible reconstruction, then return null : '${wordsSet}'`, () => {
		expect(wordFromString(wordsSetThatNotWork, strThatNotWork)).toEqual(null);
	});

	it(`if multiple reconstruction possible return one of the possibilities: '${wordsSet}'`, () => {
		expect(
			wordFromString(wordsSetMultiplePossibilities, strMultiplePossibilities)
		).toEqual(expectedMultiplePossibilities);
	});
});
