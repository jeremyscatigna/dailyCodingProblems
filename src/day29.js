import { findRepos } from "jest-changed-files";

/*

This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.*/

// the goal is to encode and decode a string
// we have precisions about our input
// the string to be encoded have no digits and consists solely of alphabetic characters.
// You can assume the string to be decoded is valid.

// so our input is a string
// our output is a string

// test case:
// input: CCCBBBGGGGGKKSOOO
// output: 3C3B5G2K1S3O

// input: AAW
// output: 2A1W

// first thought would be to use a hashmap to store key  value pair (Letter -> number of time this letter is in the string)

export class StringEncoding {
	constructor() {}

	encode(decodedString) {
		const letterCount = new Map();
		let encodedString = "";
		for (let char of decodedString) {
			if (letterCount.has(char)) {
				letterCount.set(char, letterCount.get(char) + 1);
			} else {
				letterCount.set(char, 1);
			}
		}

		for (const [key, value] of letterCount) {
			encodedString += `${value}${key}`;
		}

		return encodedString;
	}

	decode(encodedString) {
		let decodedString = "";
		const letterCount = new Map();

		for (let i = 0; i < encodedString.length; i += 2) {
			letterCount.set(encodedString.charAt(i + 1), encodedString.charAt(i));
		}

		for (const [key, value] of letterCount) {
			for (let i = 0; i < value; i++) {
				decodedString += key;
			}
		}

		return decodedString;
	}
}
