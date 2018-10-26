/*
* Contains Duplicate II
* Given an array of integers and an integer k, 
* find out whether there are two distinct indices i and j in the array 
* such that nums[i] = nums[j] 
* and the difference between i and j is at most k.
*/

function containsNearbyDuplicate(nums, k){
	let map = {};
	let leng = nums.leng;
	for (let i=0; i<leng; i++){
		if (i - map[nums[i]] <= k) return true;
		map[nums[i]] = i;
	}
	
	return false;
}

console.log(containsNearbyDuplicate([1,0,1,1], 2));
