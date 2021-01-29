"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizedKthToLast = exports.naiveKthToLast = void 0;
/*
    Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
*/
function getSize(list) {
    if (list.head === null)
        return 0;
    let n = list.head;
    let size = 1;
    while (n.next !== null) {
        size++;
        n = n.next;
    }
    return size;
}
function naiveKthToLast(list, k) {
    // runs in O(n) time where n are the number of nodes in the linked list
    // iterates through list at least once to get size and then iterates through (on average) n/2 times to find kthToLast
    let nodesToEnd = getSize(list);
    let n = list.head;
    if (n === null || k < 1 || k > nodesToEnd)
        return null;
    if (nodesToEnd === k)
        return n.data;
    while (n.next !== null) {
        n = n.next;
        nodesToEnd--;
        if (nodesToEnd === k) {
            n.next = null;
            return n.data;
        }
    }
    if (nodesToEnd === k)
        return n.data;
    return null;
}
exports.naiveKthToLast = naiveKthToLast;
function optimizedKthToLast(list, k) {
    // let i, j be nodes and i will be the kth-to-last node when j reaches the end
    let i = list.head;
    let j = list.head;
    if (k < 1)
        return null;
    while (k !== 1) {
        if (j.next === null)
            return null;
        j = j.next;
        k--;
    }
    while (j.next !== null) {
        i = i.next;
        j = j.next;
    }
    return i.data;
}
exports.optimizedKthToLast = optimizedKthToLast;
//# sourceMappingURL=2.2_Kth_To_Last.js.map