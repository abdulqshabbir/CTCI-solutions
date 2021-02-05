/*
    Problem:  Implement a function to check if a linked list is a palindrome.
*/

import { LinkedList } from "./2.0_Linked_List";
import { Node } from "./2.0_Node";

export function isPalindromeRecursive(head: Node, size: number) {
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

export function isPalindromeUsingStack(list: LinkedList) {
    // 1 -> 3 -> 3 -> 1
    const stack = []
    const size = getSize(list)
    let midIndex = Math.floor(size / 2)
    if (size % 2 === 0) {
        midIndex = midIndex - 1
    }

    let n = list.head
    for (let i = 0; i <= midIndex; i++) {
        stack.push(n.data)
        n = n.next
    }

    if (size % 2 === 1) {
        stack.pop()
    }

    while (n !== null) {
        if (n.data !== stack.pop()) {
            return false
        }
        n = n.next
    }
    return stack.length === 0 ? true : false
}

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
