/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

// could we have duplicates ?
// is the array sorted ?

// Brute force solution:
// add every 2 numbers combination and check if one of the result is the target
// O(n!)

// Optimization:
// I think we could use a Set
// We could loop throught the array,
// store number in the set,
// check if the set has next number - target

// numbers = new Set
// loop through list
// if numbers.has(target - number)
// return true
// else
// add number to numbers
// return false

// [10, 15, 3, 7] and k of 17
export function addUpToK(list, target) {
  const numbersToAdd = new Set();
  for (let i = 0; i < list.length; i++) {
    if (numbersToAdd.has(target - list[i])) {
      return true;
    } else {
      numbersToAdd.add(list[i]);
    }
  }

  return false;
}
