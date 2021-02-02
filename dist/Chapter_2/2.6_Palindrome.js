"use strict";
/*
    Problem:  Implement a function to check if a linked list is a palindrome.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSize = exports.areListsEquivalent = exports.reverseList = exports.isPalindrome = void 0;
const _2_0_Linked_List_1 = require("./2.0_Linked_List");
const _2_0_Node_1 = require("./2.0_Node");
/*
    Psuedocode:

    1. reverse the linked list
    2. iterate over the reversed list and original
       list and check if they are equivalent
 */
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