/**
 * Contains Duplicate II
 * 
 * Proverbs 16:9
 * In their hearts humans plan their course, 
 * but the LORD established their steps.
 * 
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k){
	let n = nums.length;
	let hash = {};
    for (let i = 0; i < n; i++) {
    	let t = nums[i];
    	//let j = hash[t];
    	//if (j != null){ // in javascript, no necessary to check
    		//if (i-j <= k && t==nums[j]){
    		// No need to compare (t==nums[j]), because it's already same. 
    		// Already saved in hash means, those are same value.
    		if (i-hash[t]<=k){
    			return true;
    		}
    	//}
    	hash[t]=i;
    }
    return false;
}

console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true
console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false

