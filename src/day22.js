/*
This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/

export function wordFromString(words, str) {
	// We receive a set of words
	// we need to output an array of words
	// Given a dictionary of words and a string made up of those words (no spaces)
	// return the original sentence in a list
	// We need to find words in the string that are in the list
	// a first idea would be to loop throught the string character by character
	// and watch if the characters we have correspond to a word in the set
	// if yes append to the result list
	// else continue

	let result = [];
	let word = "";

	for (let i = 0; i < str.length; i++) {
		word += str.charAt(i);
		if (words.has(word)) {
			result.push(word);
			word = "";
		}
	}

	if (result.join("").length !== str.length) {
		return null;
	}

	return result;
}

// O(n) time complexity
