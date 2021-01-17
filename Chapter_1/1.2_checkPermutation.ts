/*
    Problem: Given two strings, write a method
    that decides if one is a permutation of the other.

    Naive solution: time complexity is O(clogc) where
    c is the number of characters in string a or b 

    HashMap solution: O(c) where c is the number of characters
    in string a or b.
*/

export function checkPermutationNaive(a: string, b: string) {
    // assume the strings are in ASCII format, whitespace is significant and permutation is case-sensitive
    if (a.length !== b.length) {
        return false
    }
    const sortedA = a.split('').sort()
    const sortedB = b.split('').sort()
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) {
            return false
        }
    }
    return true
}

export function checkPermutationHashMap(a: string, b: string) {
    // assume the strings are in ASCII format
    if (a.length !== b.length) {
        return false
    }
    const numOfCharacters = new Map<string, number>()

    for (let char of a) {
        /*
           store the number of occurences of each character into the hashmap: numOfCharacters
        */
        if (!numOfCharacters.has(char)) {
            numOfCharacters.set(char, 1)
        } else {
            const prev = numOfCharacters.get(char)
            numOfCharacters.set(char, prev + 1)
        }
    }

    for (let char of b) {
        /*
            Remove the occurences of each character by reversing the process in the first for-loop
        */
        if (numOfCharacters.has(char) && numOfCharacters.get(char) > 0) {
            const prev = numOfCharacters.get(char)
            numOfCharacters.set(char, prev - 1)
        } else {
            return false
        }
    }
    return true
}