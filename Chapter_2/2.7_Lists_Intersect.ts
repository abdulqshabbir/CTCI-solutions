import { Node } from './2.0_Node'
import { LinkedList } from "./2.0_Linked_List";
import { getSize } from "./2.6_Palindrome";

export function findIntersection(A: LinkedList, B: LinkedList): Node | null {
    if (doIntersect(A, B)) {
        const sizeA = getSize(A)
        const sizeB = getSize(B)

        if (sizeA > sizeB) {
            A = trimHead(A, sizeA - sizeB)
        } else if (sizeB > sizeA) {
            B = trimHead(B, sizeB - sizeA)
        }

        let a = A.head
        let b = B.head
        while (a !== null && b !== null) {
            if (a.data === b.data) {
                return a
            }
            a = a.next
            b = b.next
        }
        return null
    }
    return null
}

export function trimHead(A: LinkedList, count: number): LinkedList {
    if (count > getSize(A) || count < 1) return A
    for (let i = 0; i < count; i++) {
        A.head = A.head.next
    }
    return A
}

export function doIntersect(A: LinkedList, B: LinkedList): boolean {
    let a = A.head // a is a node in list A
    let b = B.head // b is a node in list B

    if (a === null || b === null) return false

    while (a.next !== null) {
        a = a.next
    }
    while (b.next !== null) {
        b = b.next
    }

    return a.data === b.data
}