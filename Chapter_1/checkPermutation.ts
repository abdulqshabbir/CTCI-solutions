/*
    Problem: Given two strings, write a method
    that decides if one is a permutation of the other.
*/

export function checkPermutation(a: string, b: string) {
    if (a.length !== b.length) {
        return false
    }
    const unicodeArrayOfA = a.split('').map((char, i) => char.charCodeAt(i))
    const unicodeArrayOfB = b.split('').map((char, i) => char.charCodeAt(i))
    console.log(unicodeArrayOfA)
    console.log(unicodeArrayOfB)

}