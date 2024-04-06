/**
 * Checks if any two numbers in the array add up to the target.
 * @param {number[]} array - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {boolean} - True if a pair is found, otherwise false.
 */
function hasTargetSum(array, target) {
  array.sort((a, b) => a - b);
  let left = 0,
      right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) return true;
    sum < target ? left++ : right--;
  }
  return false;
}

/* 
  Time complexity: O(n log n)
*/

/* 
  Steps:
  1. Sort the array.
  2. Move two pointers towards each other while checking the sum of the numbers they point to.
  3. If the sum equals the target, return true.
  4. If the sum is less than the target, move the left pointer to the right.
  5. If the sum is greater than the target, move the right pointer to the left.
  6. If no pair is found, return false.
*/

/*
  Explanation:
  This function sorts the array and then uses a method called the "two-pointer technique" to efficiently search for a pair of numbers that add up to the target. 
*/

module.exports = hasTargetSum;

