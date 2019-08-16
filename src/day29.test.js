import { StringEncoding } from "./day29";

describe("day4: find the first missing positive integer", () => {
	const decodedString = "CCCBBBGGGGGKKSOOO";
	const encodedString = "3C3B5G2K1S3O";

	const stringEncoding = new StringEncoding();

	it(`should return the encoded string: '${decodedString}'`, () => {
		expect(stringEncoding.encode(decodedString)).toEqual(encodedString);
	});

	it(`should return the decoded string: '${encodedString}'`, () => {
		expect(stringEncoding.decode(encodedString)).toEqual(decodedString);
	});
});
