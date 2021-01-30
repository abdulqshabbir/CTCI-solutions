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

import { LinkedList } from "./2.0_Linked_List";
import { Node } from './2.0_Node';

export function partition(list: LinkedList, p: number) {
    // a is a list with nodes | node.data < p
    const a = new LinkedList()

    // b is a list with nodes | node.data >= p
    const b = new LinkedList()

    let node = list.head

    while (node !== null) {
        if (node.data < p) {
            const rest = a.head
            const newNode = new Node(node.data)
            a.head = newNode
            newNode.next = rest
        } else {
            const rest = b.head
            const newNode = new Node(node.data)
            b.head = newNode
            newNode.next = rest
        }
        node = node.next
    }

    if (b.head === null) return a
    if (a.head === null) return b

    let n: Node = a.head
    // iterate until the end of a and link the last node of a to b
    while (n.next !== null) {
        n = n.next
    }
    n.next = b.head
    return a
}

