"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doIntersect = exports.trimHead = exports.findIntersection = void 0;
const _2_6_Palindrome_1 = require("./2.6_Palindrome");
function findIntersection(A, B) {
    if (doIntersect(A, B)) {
        const sizeA = _2_6_Palindrome_1.getSize(A);
        const sizeB = _2_6_Palindrome_1.getSize(B);
        if (sizeA > sizeB) {
            A = trimHead(A, sizeA - sizeB);
        }
        else if (sizeB > sizeA) {
            B = trimHead(B, sizeB - sizeA);
        }
        let a = A.head;
        let b = B.head;
        while (a !== null && b !== null) {
            if (a.data === b.data) {
                return a;
            }
            a = a.next;
            b = b.next;
        }
        return null;
    }
    return null;
}
exports.findIntersection = findIntersection;
function trimHead(A, count) {
    if (count > _2_6_Palindrome_1.getSize(A) || count < 1)
        return A;
    for (let i = 0; i < count; i++) {
        A.head = A.head.next;
    }
    return A;
}
exports.trimHead = trimHead;
function doIntersect(A, B) {
    let a = A.head; // a is a node in list A
    let b = B.head; // b is a node in list B
    if (a === null || b === null)
        return false;
    while (a.next !== null) {
        a = a.next;
    }
    while (b.next !== null) {
        b = b.next;
    }
    return a.data === b.data;
}
exports.doIntersect = doIntersect;
//# sourceMappingURL=2.7_Lists_Intersect.js.map