/*
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
                root
                /  \
            left    right
            /
        left.left
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

// I'll create a Node class with the serialize and deserialize function in it
// My first impression is that I'm going to need to traverse the tree
// So it will use recursion
// We'll use pre Order traversal => root then left then right

export class Node {
	constructor(val, left, right) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

export class Tree {
	constructor() {
		this.nodeList = [];
		this.index = 0;
	}
	serialize(node) {
		let serialized = "";
		this._traverseTree(node);
		serialized = this.nodeList.join(",");
		return serialized;
	}

	deserialize(data) {
		data = data.split(",");

		return this._deserializer(data);
	}
	_traverseTree(node) {
		if (node === undefined) {
			this.nodeList.push("#");
			return;
		}

		this.nodeList.push(node.val);

		this._traverseTree(node.left);
		this._traverseTree(node.right);
	}
	_deserializer(data) {
		if (this.index > data.length || data[this.index] === "#") {
			return;
		}

		let node = new Node(data[this.index]);
		this.index++;
		node.left = this._deserializer(data, this.index);
		this.index++;
		node.right = this._deserializer(data, this.index);
		return node;
	}
}
