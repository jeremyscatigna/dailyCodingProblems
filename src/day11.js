/*
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

export class Node {
	constructor(val) {
		this.val = val;
		this.parent = null;
		this.children = {};
		this.end = false;
	}
}

export class Trie {
	constructor() {
		this.root = new Node(null);
	}

	insert(text) {
		let node = this.root;
		for (let char of text) {
			if (!node.children[char]) {
				node.children[char] = new Node(char);
				node.children[char].parent = node;
			}
			node = node.children[char];

			if (char === text.charAt(text.length - 1)) {
				node.end = true;
			}
		}
	}

	find(prefix) {
		let node = this.root;
		const output = [];

		for (let char of prefix) {
			// make sure prefix actually has words
			if (node.children[char]) {
				node = node.children[char];
			} else {
				// there's none. just return it.
				return output;
			}
		}

		// recursively find all words in the node
		this._findAllWords(node, output);

		return output;
	}

	_getWord(node) {
		const output = [];

		while (node !== null) {
			output.unshift(node.val);
			node = node.parent;
		}

		return output.join("");
	}

	_findAllWords(node, arr) {
		// base case, if node is at a word, push to output
		if (node.end) {
			arr.unshift(this._getWord(node));
		}

		// iterate through each children, call recursive findAllWords
		for (let child in node.children) {
			this._findAllWords(node.children[child], arr);
		}
	}
}

export function autoComplete(queryString, stringList) {
	// We have a string and a set of strings as input
	// We need to output an array or a set of strings
	// the goal is to return all the strings in the set that have the query string as a prefix
	// We have an hint:
	// preprocess the set into a more efficient data structure
	// when I think about autocomplete I think about trees
	// So I could maybe use a tree to easilly find the strings with same prefix

	// I create a whatever root char
	// and create the tree under it

	// create the tree:
	// if we have: queryString = "de", stringList = ["dog", "deer", "deal"]
	//              x
	//           /
	//        d
	//     /     \
	//    o       e
	//   /       /  \
	//  g       e    a
	//         /    /
	//        r    l

	// construct tree
	let trie = new Trie();
	for (let word of stringList) {
		trie.insert(word);
	}

	// So given this tree we could traverse it using the query string
	// d -> e -> e -> r
	// d -> e -> a -> l
	// return ["deer", "deal"]

	const result = trie.find(queryString);

	return result;
}
