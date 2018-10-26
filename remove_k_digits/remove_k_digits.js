/**
 * Remove K Digits
 * 
 * Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let result = "";
    let leng = num.length;

    if (leng == k){
        return "0";
    }

    if(k==0){
        return num;
    }

    let stack = [];
    let stackSize = 0;
    let ind = {};
    let m = k;

    for (let i=0; i<leng; i++){
        if (m <= 0){
            break;
        }

        let n = Number(num.charAt(i));
        stackSize = stack.length;
        
        if (stackSize > 0){
            let lastStack = stack[stackSize-1];
            while(m > 0 && lastStack.number > n){
                ind[lastStack.index] = true;
                stack = stack.slice(0, stackSize-1);
                stackSize--;
                m--;
                lastStack = stack[stackSize-1];
            }
        }
        
        stack.push({
            "index": i,
            "number": n
        });
    }

    let indLeng = ind.length;
    let diff = k - indLeng;
    while(diff > 0){
        ind[stack[stack.length-1].index] = true;
        stack = stack.slice(0, stackSize-1);
        diff--;
    }

    console.log(ind);
    
    indLeng = ind.length;
    for (let i=0; i<leng; i++){
        if (ind[i] == null || ind[i] == undefined){
            result += num.charAt(i);
        }
    }

    while(result.charAt(0) == 0){
        result = result.substring(1);
    }

    return result;
};

console.log(removeKdigits("1432219", 3)); // 1219
console.log(removeKdigits("10200", 1)); // 200
console.log(removeKdigits("10", 2)); // 0
