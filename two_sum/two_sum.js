/**
 * Two Sum
 * 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let leng = nums.length;
    let hash = {};
    let i=0, j=0;
    
	for(i=0; i<leng; i++){
		let temp = target - nums[i];
		if (hash[temp] != null){
			j = hash[temp];
			break;
		}
		hash[nums[i]] = i;
	}
	if (i<j) return [i, j]
	else return [j, i];
};

console.log(twoSum([2,7,11,15], 9));  // [0,1]
console.log(twoSum([2,7,11,15], 18));  // [1,2]
