/**
 * Longest Substring Without Repeating Characters
 * 
 * Matthew 6:3-4
 * But when you give to the needy, 
 * do not let your left hand know what your right hand is doing, 
 * so that your giving may be in secret. 
 * Then your Father, who sees what is done in secret, will reward you.
 * 

Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let leng = s.length;
    if (s == null || leng == 0){
        return 0;
    } else if (leng == 1){
        return 1;
    }

    let i=0, j=0, max=0;

    /* Optimized solution
     * Using int value for hash key, char value could be converted to integer (ASCII)
    */
    let hash = {}; // runtime result is same, {} and [];
    for(; j<leng; j++){
        let tempChar = s[j].charCodeAt();
        // looks like using .charCodeAt() is faster, compare to not using it.
        
        let tempIndex = hash[tempChar];
        if(tempIndex != null){
            i = i > tempIndex ? i : tempIndex+1;
        }
        let tempMax = j - i + 1;
        max = max > tempMax ? max : tempMax;
        hash[tempChar] = j;
    }


    return max;
};

console.log(3, lengthOfLongestSubstring("abcabcbb"));
console.log(1, lengthOfLongestSubstring("bbbbb"));
console.log(3, lengthOfLongestSubstring("pwwkew"));
console.log(0, lengthOfLongestSubstring(""));
console.log(1, lengthOfLongestSubstring(" "));
console.log(1, lengthOfLongestSubstring("a"));
console.log(2, lengthOfLongestSubstring("au"));
console.log(3, lengthOfLongestSubstring("dvdf"));
console.log(13, lengthOfLongestSubstring("dabvdfevzxyuiopkj"));
console.log(5, lengthOfLongestSubstring("tmmzuxt"));
