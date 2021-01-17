"use strict";
/*
    Problem: Given two strings, write a method
    that decides if one is a permutation of the other.

    Naive solution: time complexity is O(aloga + blogb) where
    a is the number of characters in string a, and b is the number
    of characters in string b
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermutationHashMap = exports.checkPermutationNaive = void 0;
function checkPermutationNaive(a, b) {
    // assume the strings are in ASCII format
    if (a.length !== b.length) {
        return false;
    }
    const sortedA = a.split('').sort();
    const sortedB = b.split('').sort();
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) {
            return false;
        }
    }
    return true;
}
exports.checkPermutationNaive = checkPermutationNaive;
function checkPermutationHashMap(a, b) {
    // assume the strings are in ASCII format
    if (a.length !== b.length) {
        return false;
    }
    const mapA = new Map();
    const mapB = new Map();
    // tslint:disable-next-line: prefer-for-of
    for (let char of a) {
        /*
            if map doesn't have character, insert character with value 1 into mapA
            if map does have character, increment value by 1
        */
        if (!mapA.has(char)) {
            mapA.set(char, 1);
        }
        else {
            const prev = mapA.get(char);
            mapA.set(char, prev + 1);
        }
    }
    for (let char of b) {
        if (mapA.has(char) && mapA.get(char) > 0) {
            const prev = mapA.get(char);
            mapA.set(char, prev - 1);
        }
        else {
            return false;
        }
    }
    return true;
}
exports.checkPermutationHashMap = checkPermutationHashMap;
//# sourceMappingURL=checkPermutation.js.map