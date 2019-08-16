/*
This problem was asked by Google.

The edit distance between two strings refers to the minimum number of character 
insertions, deletions, and substitutions required to change one string to the other. 
For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.
*/

export function editDistance(s1, s2) {
	// our input is 2 strings
	// output should be a number
	// we need to compute the edit distance
	// which means how many changes we need to make to go from s1 to s2
	// first though:
	// we could go through both string a the same time and check for differences char by char
	// and increment a counter every time we see a difference
	// if we did it by hand
	// it would look like this
	// [k,i,t,t,e,n], [s,i,t,t,i,n,g]
	// 1rst itteration:
	// k !== s => counter + 1
	// 2nd itteration:
	// i === i => next
	// ...
	// it would be O(n + m) the sizes of each string added
	if (s1.length === 0 || s2.length === 0) {
		return Math.max(s1.length, s1.length);
	}

	let edit = 0;
	let index1 = 0;
	let index2 = 0;
	while (index1 !== s1.length && index2 !== s2.length) {
		if (s1.charAt(index1) !== s2.charAt(index2)) {
			edit++;
		}
		index1++;
		index2++;
	}

	if (s2.length > s1.length) {
		edit += s2.length - s1.length;
	}

	return edit;
}
