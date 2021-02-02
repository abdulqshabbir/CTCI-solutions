"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepend = exports.padWithZeros = exports.getSize = exports.addListHelper = exports.sumLists = void 0;
const _2_0_Linked_List_1 = require("./2.0_Linked_List");
const _2_0_Node_1 = require("./2.0_Node");
/*
    Problem:
    Sum Lists: You have two numbers represented by a linked list, where each node
    contains a single digit.The digits are stored in forwward order. Write a
    function that adds the two numbers and returns the sum as a linked list.
*/
function sumLists(A, B) {
    // create placeholder zeros if neeeded
    if (getSize(A) > getSize(B)) {
        B = padWithZeros(B, getSize(A) - getSize(B));
    }
    if (getSize(B) > getSize(A)) {
        A = padWithZeros(A, getSize(B) - getSize(A));
    }
    // sum list helper
    const partialSum = addListHelper(A.head, B.head);
    let list = new _2_0_Linked_List_1.LinkedList();
    list.head = partialSum.sum;
    if (partialSum.carry === 1) {
        list = prepend(list, partialSum.carry);
    }
    return list;
}
exports.sumLists = sumLists;
class PartialSum {
    constructor() {
        this.sum = null;
        this.carry = 0;
    }
}
function addListHelper(A, B) {
    // base case when we reach the end of both lists
    if (A === null || B === null) {
        return new PartialSum();
    }
    // recursive step we accumulatee the sum backwards
    const partialSum = addListHelper(A.next, B.next);
    let val = A.data + B.data + partialSum.carry;
    let carry = 0;
    if (val > 9) {
        carry = 1;
        val = val % 10;
    }
    else {
        carry = 0;
        val = val % 10;
    }
    const head = new _2_0_Node_1.Node(val);
    head.next = partialSum.sum;
    return { sum: head, carry };
}
exports.addListHelper = addListHelper;
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
function padWithZeros(list, numOfZeros) {
    for (let i = 0; i < numOfZeros; i++) {
        const rest = list.head;
        const node = new _2_0_Node_1.Node(0);
        list.head = node;
        node.next = rest;
    }
    return list;
}
exports.padWithZeros = padWithZeros;
function prepend(list, data) {
    const rest = list.head;
    const newNode = new _2_0_Node_1.Node(data);
    list.head = newNode;
    newNode.next = rest;
    return list;
}
exports.prepend = prepend;
//# sourceMappingURL=2.5.1_Sum_Lists_Forward.js.map