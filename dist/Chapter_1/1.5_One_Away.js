"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneAway = void 0;
function oneAway(strA, strB) {
    // assume string only contains upper/lower case english letters
    return checkForOneAway(strA, strB);
}
exports.oneAway = oneAway;
function checkForOneAway(strA, strB) {
    if (strA.length === strB.length) {
        return checkForOneEdit(strA, strB);
    }
    else {
        return checkForAddOrRemove(strA, strB);
    }
}
function checkForOneEdit(strA, strB) {
    const charTableA = buildFrequencyTable(strA);
    const charTableB = buildFrequencyTable(strB);
    let numberOfCharDifferences = 0; // there should be two instances of character differences if the string was edited
    for (let i = 0; i < charTableA.length; i++) {
        if (Math.abs(charTableA[i] - charTableB[i]) !== 0) {
            // tally the difference of character repititions
            numberOfCharDifferences = numberOfCharDifferences + Math.abs(charTableA[i] - charTableB[i]);
        }
    }
    return numberOfCharDifferences === 2;
}
function checkForAddOrRemove(strA, strB) {
    // make strA the longer string
    if (strB.length > strA.length) {
        const temp = strB;
        strB = strA;
        strA = temp;
    }
    let numberOfChanges = 0;
    const charTableA = buildFrequencyTable(strA);
    const charTableB = buildFrequencyTable(strB);
    for (let i = 0; i < charTableA.length; i++) {
        if (charTableA[i] - charTableB[i] === 1) {
            numberOfChanges++;
            if (numberOfChanges > 1) {
                return false;
            }
        }
        else if (charTableA[i] - charTableB[i] > 1) {
            return false;
        }
    }
    return true;
}
function buildFrequencyTable(str) {
    // map each string to its character code
    // e.g. A -> 0, B -> 1, ...
    const table = new Array(52).fill(0);
    for (const char of str) {
        const charCode = getCharacterCode(char);
        table[charCode]++;
    }
    return table;
}
function getCharacterCode(char) {
    // will map English letters to numbers starting from 0
    // e.g. A -> 0, B -> 2, ... , a -> 26, b -> 27, ...
    if (char.length !== 1) {
        return -1;
    }
    const A = 'A'.charCodeAt(0);
    const Z = 'A'.charCodeAt(0);
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    const val = char.charCodeAt(0);
    // map lowercase letters to a number from 0 to 25
    if (val >= A && val <= Z) {
        return val - A;
    }
    // map uppercase letters to a number from 0 to 25
    if (val >= a && val <= z) {
        return val - a;
    }
}
//# sourceMappingURL=1.5_One_Away.js.map