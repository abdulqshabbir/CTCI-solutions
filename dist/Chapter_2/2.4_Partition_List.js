"use strict";
/*
    Problem: Write code to partition a linked list around a value x,
    such that all nodes less than x come before all nodes greater than
    or equal to x. If x is contained within the list, the values of x
    only need to be after the elements less than x (see below).
    The partition element x can appear anywhere in the "right partition";
    it does not need to appear between the left and right partitions.

    Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5]
    Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.partition = void 0;
const _2_0_Linked_List_1 = require("./2.0_Linked_List");
const _2_0_Node_1 = require("./2.0_Node");
/*
    function partition (list, p) => list

    create two lists: a & b
    a will contain nodes such that node.data < p
    b will contain nodes such that node.data >= p

    for each node in list:
        if node.data < p:
            rest = a.head
            a.head = node
            node.next = rest
        else:
            rest = b.head
            b.head = node
            node.next = rest

    create n which is initialized to a.head

    while (n.next !== null) {
        n = n.next
    }

    n.next = b
    return a
*/
function partition(list, p) {
    debugger;
    // a is a list with nodes | node.data < p
    const a = new _2_0_Linked_List_1.LinkedList();
    // b is a list with nodes | node.data >= p
    const b = new _2_0_Linked_List_1.LinkedList();
    let node = list.head;
    // list: head -> 10 -> 23 -> 13 -> 15 -> null
    // a: head -> null
    // b: head -> null
    while (node !== null) {
        if (node.data < p) {
            const rest = a.head;
            const newNode = new _2_0_Node_1.Node(node.data);
            a.head = newNode;
            newNode.next = rest;
        }
        else {
            const rest = b.head;
            const newNode = new _2_0_Node_1.Node(node.data);
            b.head = newNode;
            newNode.next = rest;
        }
        node = node.next;
    }
    if (b.head === null)
        return a;
    if (a.head === null)
        return b;
    let n = a.head;
    while (n.next !== null) {
        n = n.next;
    }
    n.next = b.head;
    return a;
}
exports.partition = partition;
//# sourceMappingURL=2.4_Partition_List.js.map