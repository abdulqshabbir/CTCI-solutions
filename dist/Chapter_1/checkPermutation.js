"use strict";
/*
    Problem: Given two strings, write a method
    that decides if one is a permutation of the other.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermutation = void 0;
function checkPermutation(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    const unicodeArrayOfA = a.split('').map((char, i) => char.charCodeAt(i));
    const unicodeArrayOfB = b.split('').map((char, i) => char.charCodeAt(i));
    console.log(unicodeArrayOfA);
    console.log(unicodeArrayOfB);
}
exports.checkPermutation = checkPermutation;
//# sourceMappingURL=checkPermutation.js.map