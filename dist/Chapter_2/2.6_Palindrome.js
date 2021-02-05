"use strict";
/*
    Problem:  Implement a function to check if a linked list is a palindrome.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSize = exports.areListsEquivalent = exports.reverseList = exports.isPalindrome = exports.isPalindromeUsingStack = exports.isPalindromeRecursive = void 0;
const _2_0_Linked_List_1 = require("./2.0_Linked_List");
const _2_0_Node_1 = require("./2.0_Node");
function isPalindromeRecursive(head, size) {
    /*
        head -> 1 -> 3 -> 5 -> 3 -> 1 -> null
        // base case


        // recurisive step
        if (index <= midIndex) push head.data onto stack
        if (index > midIndex && head.data === stack[stack.length -1]) pop off stack
        head = head.next
        isPalindromeRecursive(head, stack)
    */
}
exports.isPalindromeRecursive = isPalindromeRecursive;
function isPalindromeUsingStack(list) {
    // 1 -> 3 -> 3 -> 1
    const stack = [];
    const size = getSize(list);
    let midIndex = Math.floor(size / 2);
    if (size % 2 === 0) {
        midIndex = midIndex - 1;
    }
    let n = list.head;
    for (let i = 0; i <= midIndex; i++) {
        stack.push(n.data);
        n = n.next;
    }
    if (size % 2 === 1) {
        stack.pop();
    }
    while (n !== null) {
        if (n.data !== stack.pop()) {
            return false;
        }
        n = n.next;
    }
    return stack.length === 0 ? true : false;
}
exports.isPalindromeUsingStack = isPalindromeUsingStack;
function isPalindrome(original) {
    const reverse = reverseList(original);
    return areListsEquivalent(original, reverse);
}
exports.isPalindrome = isPalindrome;
function reverseList(original) {
    const originalSize = getSize(original);
    const reversedList = new _2_0_Linked_List_1.LinkedList();
    let n = original.head;
    for (let i = 0; i < originalSize; i++) {
        const rest = reversedList.head;
        const front = new _2_0_Node_1.Node(n.data);
        reversedList.head = front;
        front.next = rest;
        if (n.next === null)
            break;
        n = n.next;
    }
    return reversedList;
}
exports.reverseList = reverseList;
function areListsEquivalent(l1, l2) {
    const len1 = getSize(l1);
    const len2 = getSize(l2);
    if (len1 !== len2)
        return false;
    let n1 = l1.head;
    let n2 = l2.head;
    while (n1.next !== null) {
        if (n1.data !== n2.data) {
            return false;
        }
        n1 = n1.next;
        n2 = n2.next;
    }
    return true;
}
exports.areListsEquivalent = areListsEquivalent;
function getSize(list) {
    let n = list.head;
    let size = 0;
    while (n !== null) {
        size++;
        if (n.next === null)
            break;
        n = n.next;
    }
    return size;
}
exports.getSize = getSize;
//# sourceMappingURL=2.6_Palindrome.js.map