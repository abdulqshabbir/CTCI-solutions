/*
    Problem:Sum Lists: You have two numbers represented by a linked list,
    where each node contains a single digit.The digits are stored
    in reverse order, such that the 1 's digit is at the head of the list.
    Write a function that adds the two numbers and returns the sum as
    a linked list.
    Input: (head -> 7 -> 1 -> 6 -> null) + (head -> 5 -> 9 -> 2 -> null)
    output: head -> 2 -> 1 -> 9 -> null
*/

import { LinkedList } from "./2.0_Linked_List";
import { Node } from './2.0_Node';

export function sumLists(listA: LinkedList, listB: LinkedList) {
    // let i, j be nodes on lists A and B respectively
    let i = listA.head
    let j = listB.head
    let carry = 0
    const result = []
    let digit: number

    while (i !== null && j !== null) {
        digit = i.data + j.data + carry
        if (digit > 9) {
            carry = 1
            digit = digit % 10
        } else {
            carry = 0
        }
        result.push(digit)
        i = i.next
        j = j.next
    }

    if (i === null && j === null) {
        if (carry === 1) {
            result.push(carry)
            return constructSummedList(result)
        }
    }

    // reached the end of listA
    if (i === null) {
        while (j !== null) {
            digit = j.data + carry
            j = j.next
            if (digit > 9) {
                carry = 1
                digit = digit % 10
                result.push(digit)
                result.push(carry)
            } else {
                carry = 0
                result.push(digit)
            }
        }
    }

    // reached the end of listB
    if (j === null) {
        while (i !== null) {
            digit = i.data + carry
            i = i.next
            if (digit > 9) {
                carry = 1
                digit = digit % 10
                result.push(digit)
                result.push(carry)
            } else {
                carry = 0
                result.push(digit)
            }
        }
    }
    return constructSummedList(result)
}

function constructSummedList(digitArray: number[]) {
    const summedList = new LinkedList()
    let summedListTail = summedList.head
    for (const num of digitArray) {
        const newNode = new Node(num)
        if (summedListTail === null) {
            summedList.head = newNode
            summedListTail = newNode
        } else {
            summedListTail.next = newNode
            summedListTail = newNode
        }
    }
    return summedList
}