/**
 * Add Two Numbers
 * 
 * Proverbs 3:5-7
 * Trust in the LORD with all your heart and lean not on your own understanding;
 * in all your ways submit to him, and he will make your paths straight.
 * Do not be wise in your own eyes; fear the LORD and shun evil.
 * 
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1next = l1;
    let l2next = l2;
    let returnNode = new ListNode(0);
    let currentNode = returnNode;
    let carry = 0;

    while(l1next != null || l2next != null || carry == 1){
        let v1=0, v2=0;
        if (l1next != null && l1next.val != null && l1next.val != undefined){
            v1 = l1next.val;
            l1next = l1next.next;
        }
        if (l2next != null && l2next.val != null && l2next.val != undefined){
            v2 = l2next.val;
            l2next = l2next.next;
        }
        let v = v1 + v2 + carry;

        if (v >= 10){
            v = v - 10;
            carry = 1;
        } else {
            carry = 0;
        }

        currentNode.next = new ListNode(v);
        currentNode = currentNode.next;
    }

    return returnNode.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var node1 = new ListNode(2);
node1.next = new ListNode(4);
node1.next.next = new ListNode(3);

var node2 = new ListNode(5);
node2.next = new ListNode(6);

console.log(addTwoNumbers(node1, node2));
