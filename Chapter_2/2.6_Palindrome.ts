/*
    Problem:  Implement a function to check if a linked list is a palindrome.
*/

import { LinkedList } from "./2.0_Linked_List";
import { Node } from "./2.0_Node";

/*
    Psuedocode:

    1. reverse the linked list
    2. iterate over the reversed list and original
       list and check if they are equivalent
 */

export function isPalindrome(original: LinkedList) {
    const reverse = reverseList(original)
    return areListsEquivalent(original, reverse)
}

export function reverseList(original: LinkedList): LinkedList {
    const originalSize = getSize(original)
    const reversedList = new LinkedList()
    let n = original.head
    for (let i = 0; i < originalSize; i++) {
        const rest = reversedList.head
        const front = new Node(n.data)
        reversedList.head = front
        front.next = rest
        if (n.next === null) break;
        n = n.next
    }
    return reversedList
}

export function areListsEquivalent(l1: LinkedList, l2: LinkedList) {
    const len1 = getSize(l1)
    const len2 = getSize(l2)
    if (len1 !== len2) return false

    let n1 = l1.head
    let n2 = l2.head

    while (n1.next !== null) {
        if (n1.data !== n2.data) {
            return false
        }
        n1 = n1.next
        n2 = n2.next
    }
    return true
}

export function getSize(list: LinkedList) {
    let n = list.head
    let size = 0

    while (n !== null) {
        size++

        if (n.next === null) break
        n = n.next
    }
    return size
}
