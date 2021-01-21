"use strict";
/*
    Problem: String Compression: Implement a method to perform basic
    string compression using the counts of repeated characters. For example,
    the string aabcccccaaa would become a2b1c5a3. If the "compressed" string
    would not become smaller than the original string, your method should return
    the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompressedString = void 0;
function buildCompressedString(str) {
    let currentChar = str[0];
    let currentReps = 1;
    let compressedString = '';
    // compare lengths of compressed string and regular string
    if (calculateCompressedLength(str) >= str.length) {
        return str;
    }
    for (let i = 1; i < str.length; i++) {
        if (currentChar.charCodeAt(0) === str[i].charCodeAt(0)) {
            currentReps++;
        }
        else {
            compressedString += `${currentChar}${currentReps.toString()}`;
            currentReps = 1;
            currentChar = str[i];
        }
    }
    compressedString += `${currentChar}${currentReps.toString()}`;
    return compressedString;
}
exports.buildCompressedString = buildCompressedString;
function calculateCompressedLength(str) {
    let currentReps = 0;
    let compressedString = '';
    for (let i = 0; i < str.length; i++) {
        currentReps++;
        // if next character doesn't match, or next index is out of range
        if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
            compressedString += str.charAt(i) + currentReps.toString();
            currentReps = 0;
        }
    }
    return compressedString.length;
}
//# sourceMappingURL=1.6_String_Compression.js.map