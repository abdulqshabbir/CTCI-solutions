/*
    Problem: One Away: There are three types of
    edits that can be performed on strings: insert
    a character, remove a character, or replace a
    character. Given two strings, write a function
    to check if they are one edit away.

    exmaples:
        pale, ple -> true
        pale, bale -> true
        pale, bake -> false

    time complexity of solution: O(c) where c is the number of characters
    in the larger string
*/
export function oneAway(strA: string, strB: string) {
    // assume string only contains upper/lower case english letters
    return checkForOneAway(strA, strB)
}

function checkForOneAway(strA: string, strB: string): boolean {
    if (strA.length === strB.length) {
        return checkForOneEdit(strA, strB)
    } else {
        return checkForAddOrRemove(strA, strB)
    }
}

function checkForOneEdit(strA: string, strB: string) {
    const charTableA = buildFrequencyTable(strA)
    const charTableB = buildFrequencyTable(strB)
    let numberOfCharDifferences = 0 // there should be two instances of character differences if the string was edited

    for (let i = 0; i < charTableA.length; i++) {
        if (Math.abs(charTableA[i] - charTableB[i]) !== 0) {
            // tally the difference of character repititions
            numberOfCharDifferences = numberOfCharDifferences + Math.abs(charTableA[i] - charTableB[i])
        }
    }
    return numberOfCharDifferences === 2
}

function checkForAddOrRemove(strA: string, strB: string) {
    // make strA the longer string
    if (strB.length > strA.length) {
        const temp = strB
        strB = strA
        strA = temp
    }

    let numberOfChanges = 0

    const charTableA = buildFrequencyTable(strA)
    const charTableB = buildFrequencyTable(strB)

    for (let i = 0; i < charTableA.length; i++) {
        if (charTableA[i] - charTableB[i] === 1) {
            numberOfChanges++
            if (numberOfChanges > 1) {
                return false
            }
        } else if (charTableA[i] - charTableB[i] > 1) {
            return false
        }
    }
    return true
}

function buildFrequencyTable(str: string) {
    // map each string to its character code
    // e.g. A -> 0, B -> 1, ...

    const table: number[] = new Array(52).fill(0)

    for (const char of str) {
        const charCode = getCharacterCode(char)
        table[charCode]++
    }
    return table
}

function getCharacterCode(char: string) {
    // will map English letters to numbers starting from 0
    // e.g. A -> 0, B -> 2, ... , a -> 26, b -> 27, ...
    if (char.length !== 1) {
        return -1
    }
    const A = 'A'.charCodeAt(0)
    const Z = 'A'.charCodeAt(0)
    const a = 'a'.charCodeAt(0)
    const z = 'z'.charCodeAt(0)

    const val = char.charCodeAt(0)

    // map lowercase letters to a number from 0 to 25
    if (val >= A && val <= Z) {
        return val - A
    }
    // map uppercase letters to a number from 0 to 25
    if (val >= a && val <= z) {
        return val - a
    }
}