/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

// the input is an array of numbers
// the output is a number

// it need to be done in place without any extra DS to hold the n numbers
// So we could keep track of the min value and the second min
// we'll not keeping track of negative numbers

// we need to loop throught the array and keep track of the min and second min on every itteration
// if more than 1 between min and second min return min + 1

// export function firstMissingInteger(input) {
// 	let min = input[0];
// 	let secondMin = input[0];

// 	for (let i = 0; i < input.length; i++) {
// 		if (input[i] < min && input[i] >= 0) {
// 			min = input[i];
// 			secondMin = min;
// 		}
// 	}

// 	if (min + 1 !== secondMin) {
// 		return min + 1;
// 	}

// 	return 0;
// }

export function firstMissingInteger(nums) {
	function swap(i, j) {
		var tmp = nums[i];
		nums[i] = nums[j];
		nums[j] = tmp;
	}

	for (let i = 0; i < nums.length; i++) {
		while (
			0 < nums[i] &&
			nums[i] - 1 < nums.length &&
			nums[i] != i + 1 &&
			nums[i] != nums[nums[i] - 1]
		) {
			swap(i, nums[i] - 1);
		}
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != i + 1) {
			return i + 1;
		}
	}
	return nums.length + 1;
}
