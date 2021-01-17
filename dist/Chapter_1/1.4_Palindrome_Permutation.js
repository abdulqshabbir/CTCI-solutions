"use strict";
/*
    Palindrome Permutation: Given a string,
    write a function to check if it is a permutation
    of a palin­drome. A palindrome is a word or
    phrase that is the same forwards and backwards.
    A permutation is a rearrangement of letters.
    The palindrome does not need to be limited to just
    dictionary words.

    Input: Tact Coa
    Output: True
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindromePermutation = void 0;
function palindromePermutation(str) {
    // Assume ASCII string and that palindrome is
    // case-insensitive, space-insensitive
    str = str.replace(/\s+/g, '');
    str = str.toLowerCase();
    const charArray = new Array(128).fill(0);
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        charArray[code] = charArray[code] + 1;
    }
    let oddRepeatingCharactersCount = 0;
    for (const charCode of charArray) {
        if (charCode % 2 !== 0) {
            // odd repeating character
            oddRepeatingCharactersCount++;
            if (oddRepeatingCharactersCount > 1) {
                return false;
            }
        }
    }
    return true;
}
exports.palindromePermutation = palindromePermutation;
//# sourceMappingURL=1.4_Palindrome_Permutation.js.map