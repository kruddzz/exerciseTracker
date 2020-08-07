// Given an array of integers and an integer k, you need to find the number of unique pairs (i, j) that have an absolute difference equal to k.
// Example 1:
// Input: [3, 1, 4, 1, 5], k = 2
// Output: 2
// Explanation: There are two unique pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
// Example 2:
// Input:[1, 2, 3, 4, 5], k = 1
// Output: 4
// Explanation: There are four unique pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
// Example 3:
// Input: [1, 3, 1, 5, 4], k = 0
// Output: 1
// Explanation: There is one unique pair in the array, (1, 1).
// Note:
// - The pairs (i, j) and (j, i) count as the same pair.
// - The length of the array won't exceed 10,000.
// - All the integers in the given input belong to the range: [-1e7, 1e7].

/* Algorithm
1) Sort through the numbers to find unique pairs.
2) find the difference between each unique pairs.
    a)if the unique pairs are equal to k then return count of +1 to output.
    b)if the unique pairs are not equal to k move on to next pair.

*/
