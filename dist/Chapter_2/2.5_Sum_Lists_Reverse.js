"use strict";
/*
    Problem:Sum Lists: You have two numbers represented by a linked list,
    where each node contains a single digit.The digits are stored
    in reverse order, such that the 1 's digit is at the head of the list.
    Write a function that adds the two numbers and returns the sum as
    a linked list.
    Input: (head -> 7 -> 1 -> 6 -> null) + (head -> 5 -> 9 -> 2 -> null)
    output: head -> 2 -> 1 -> 9 -> null
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveSumLists = exports.sumLists = void 0;
const _2_0_Linked_List_1 = require("./2.0_Linked_List");
const _2_0_Node_1 = require("./2.0_Node");
// =========== ITERATIVE SOLUTION ========================// 
function sumLists(listA, listB) {
    // let i, j be nodes on lists A and B respectively
    let i = listA.head;
    let j = listB.head;
    let carry = 0;
    const result = [];
    let digit;
    while (i !== null && j !== null) {
        digit = i.data + j.data + carry;
        if (digit > 9) {
            carry = 1;
            digit = digit % 10;
        }
        else {
            carry = 0;
        }
        result.push(digit);
        i = i.next;
        j = j.next;
    }
    if (i === null && j === null) {
        if (carry === 1) {
            result.push(carry);
            return constructSummedList(result);
        }
    }
    // reached the end of listA
    if (i === null) {
        while (j !== null) {
            digit = j.data + carry;
            j = j.next;
            if (digit > 9) {
                carry = 1;
                digit = digit % 10;
                result.push(digit);
                result.push(carry);
            }
            else {
                carry = 0;
                result.push(digit);
            }
        }
    }
    // reached the end of listB
    if (j === null) {
        while (i !== null) {
            digit = i.data + carry;
            i = i.next;
            if (digit > 9) {
                carry = 1;
                digit = digit % 10;
                result.push(digit);
                result.push(carry);
            }
            else {
                carry = 0;
                result.push(digit);
            }
        }
    }
    return constructSummedList(result);
}
exports.sumLists = sumLists;
function constructSummedList(digitArray) {
    const summedList = new _2_0_Linked_List_1.LinkedList();
    let summedListTail = summedList.head;
    for (const num of digitArray) {
        const newNode = new _2_0_Node_1.Node(num);
        if (summedListTail === null) {
            summedList.head = newNode;
            summedListTail = newNode;
        }
        else {
            summedListTail.next = newNode;
            summedListTail = newNode;
        }
    }
    return summedList;
}
class PartialSum {
    constructor() {
        this.sum = null;
        this.tail = null;
        this.carry = 0;
    }
}
// A -> 7 -> 1 -> 9 -> 9 -> null
// B -> 5 -> 9 -> 2 -> null
function recursiveSumLists(A, B, partialSum = new PartialSum()) {
    // A and B are the head nodes of list A and list B
    // when we hit the end of both lists
    if (A === null && B === null && partialSum.carry === 0) {
        return partialSum.sum;
    }
    // when we hit the end of both lists but there is a carry left over
    if (A === null && B === null && partialSum.carry !== 0) {
        partialSum.tail.next = new _2_0_Node_1.Node(partialSum.carry);
        partialSum.tail = partialSum.tail.next;
        partialSum.carry = partialSum.carry - 1;
        return recursiveSumLists(A, B, partialSum);
    }
    // when we hit the end of list B
    if (A !== null && B === null) {
        let v = A.data + partialSum.carry;
        if (v > 9) {
            v = v % 10;
            partialSum.carry = 1;
        }
        else {
            partialSum.carry = 0;
        }
        partialSum.tail.next = new _2_0_Node_1.Node(v);
        partialSum.tail = partialSum.tail.next;
        return recursiveSumLists(A.next, B, partialSum);
    }
    // when we hit the end of list A
    if (A === null && B !== null) {
        let v = B.data + partialSum.carry;
        if (v > 9) {
            v = v % 10;
            partialSum.carry = 1;
        }
        else {
            partialSum.carry = 0;
        }
        partialSum.tail.next = new _2_0_Node_1.Node(v);
        partialSum.tail = partialSum.tail.next;
        return recursiveSumLists(A, B.next, partialSum);
    }
    // main recursive step
    let val = A.data + B.data + partialSum.carry;
    let carry = 0;
    if (val > 9) {
        val = val % 10;
        carry = 1;
    }
    if (partialSum.sum === null) {
        partialSum.sum = new _2_0_Node_1.Node(val);
        partialSum.tail = partialSum.sum;
    }
    else {
        partialSum.tail.next = new _2_0_Node_1.Node(val);
        partialSum.tail = partialSum.tail.next;
    }
    partialSum.carry = carry;
    return recursiveSumLists(A.next, B.next, partialSum);
}
exports.recursiveSumLists = recursiveSumLists;
//# sourceMappingURL=2.5_Sum_Lists_Reverse.js.map