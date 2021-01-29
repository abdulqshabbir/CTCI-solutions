/*
    Problem:  Write code to remove duplicates from an unsorted linked list.
    Do it in O(n) time and temporary buffer is allowed.
*/

import { LinkedList } from "./2.0_Linked_List";

export function removeDuplicates(list: LinkedList): LinkedList {
    const map = new Map<number, number>()

    // one or two nodes in a linked list cannot have duplicates
    if (list.head === null || list.head.next === null) return list

    // i, j are nodes and j will move ahead of i
    let i = list.head
    let j = list.head

    // isInLinkedList will store if a data value already exists in linked list
    const isInLinkedList = new Map<number, boolean>()

    j = j.next
    while (j.next !== null) {
        isInLinkedList.set(i.data, true)
        if (isInLinkedList.has(j.data)) {
            i.next = j.next
            j = i.next
        } else {
            i = i.next
            j = j.next
        }
    }

    if (isInLinkedList.has(j.data)) {
        i.next = null
    }
    return list
}

