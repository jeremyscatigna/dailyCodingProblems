/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

// take an array of numbers as input
// return a new array of numbers

// A first brute force solution would be to have two nested loops and construct the new array from the input array
// [1, 2, 3, 4, 5]
export function productOfAllNumbers(inputList) {
  const result = [];
  const numbersToMultiply = new Set(inputList);

  for (let i = 0; i < inputList.length; i++) {
    numbersToMultiply.delete(inputList[i]);
    let product = [...numbersToMultiply].reduce((acc, value) => acc * value);
    numbersToMultiply.add(inputList[i]);
    result.push(product);
  }

  return result;
}
