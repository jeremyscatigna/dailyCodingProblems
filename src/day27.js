/*
This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

export function balancedBrackets(bracketsString) {
	// the input is a string of brackets opening and closing
	// we need to check if they are well balanced
	// "([])[]({})" should return true
	// a first idea would be to use a stack
	// we push openning brackets to the stack
	// when we see a closing bracket
	// we pop the last element from the stack
	// we check if the openning bracket we pop match the closing one

	// we could use a hashmap to match opennings to closing

	const openningsToClosing = new Map();
	openningsToClosing.set("(", ")");
	openningsToClosing.set("{", "}");
	openningsToClosing.set("[", "]");

	const opennings = new Set(["(", "{", "["]);

	const stack = [];

	for (let char of bracketsString) {
		if (opennings.has(char)) {
			stack.push(char);
		} else {
			let toMatch = stack.pop();
			if (openningsToClosing.get(toMatch) !== char) {
				return false;
			}
		}
	}

	return true;
}

// O(n) time complexity
