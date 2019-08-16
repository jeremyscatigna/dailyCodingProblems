/*
This problem was asked by Google.

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
*/

export class Node {
	constructor(val, next) {
		this.val = val;
		this.next = next;
	}
}

export function removeKthElement(linkedList, k) {
	// we have a linkedlist and an integer as input
	// we need to do it in constant space and in one pass
	// which mean we are going to remove the kth last element in place
	// k is guaranteed to be smaller than the length of the list
	// first though would to work with some kind of two pointers
	// the two pointer would be spaced by a length of k
	// so if we do it by hand:
	// list = 2 -> 4 -> 5 -> 7 -> 9 -> 3
	// k = 2
	// so we need to remove the kth last element = 7
	// first itteration
	// p1 is at value 2
	// p2 is at value 5
	// second itteration
	// p1 is at value 4
	// p2 is at value 7
	// third itteration
	// p1 is at value 5
	// p2 is at value 9
	// fourth itteration
	// p1 is at value 7
	// p2 is at value 3
	// fifth itteration
	// p1 is at value 9
	// p2 is at value null
	// p2 is null so we remove p1
	// list is now = 2 -> 4 -> 5 -> 7 -> 3
}
