import { LinkedList } from "./2.0_Linked_List";
import { Node } from "./2.0_Node";

/*
    Problem:
    Sum Lists: You have two numbers represented by a linked list, where each node
    contains a single digit.The digits are stored in forwward order. Write a
    function that adds the two numbers and returns the sum as a linked list.
*/

export function sumLists(A: LinkedList, B: LinkedList) {
    // create placeholder zeros if neeeded
    if (getSize(A) > getSize(B)) {
        B = padWithZeros(B, getSize(A) - getSize(B))
    }
    if (getSize(B) > getSize(A)) {
        A = padWithZeros(A, getSize(B) - getSize(A))
    }

    // sum list helper
    const partialSum = addListHelper(A.head, B.head)
    let list = new LinkedList()
    list.head = partialSum.sum
    if (partialSum.carry === 1) {
        list = prepend(list, partialSum.carry)
    }
    return list
}

interface PartialSum {
    sum: Node | null,
    carry: number
}

class PartialSum {
    constructor() {
        this.sum = null
        this.carry = 0
    }
}

export function addListHelper(A: Node, B: Node): PartialSum {
    // base case when we reach the end of both lists
    if (A === null || B === null) {
        return new PartialSum()
    }
    // recursive step we accumulatee the sum backwards
    const partialSum = addListHelper(A.next, B.next)
    let val = A.data + B.data + partialSum.carry
    let carry = 0
    if (val > 9) {
        carry = 1
        val = val % 10
    } else {
        carry = 0
        val = val % 10
    }
    const head = new Node(val)
    head.next = partialSum.sum
    return { sum: head, carry }
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

export function padWithZeros(list: LinkedList, numOfZeros: number) {
    for (let i = 0; i < numOfZeros; i++) {
        const rest = list.head
        const node = new Node(0)
        list.head = node
        node.next = rest
    }
    return list
}

export function prepend(list: LinkedList, data: number) {
    const rest = list.head
    const newNode = new Node(data)
    list.head = newNode
    newNode.next = rest
    return list
}