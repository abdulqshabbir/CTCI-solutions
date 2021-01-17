"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLify = void 0;
/*
    Problem:  Write a method to REPLACE all spaces in a string with '%20'.
    You may assume that the string has sufficient space at the end to hold the additional
    characters,and that you are given the "true" length of the string.

    Input: "Mr John Smith     ", 13
    Output: "Mr%20John%20Smith"

    Time complexity: O(n) where n is the number of true characters in str
*/
function URLify(str, n) {
    // Assume string is in ASCII format
    // Assume that trailing space is sufficient to hold the extra characters from the replacing the spaces with '%20'
    const isSpace = ' ';
    let spaces = 0;
    // count number of spaces in str
    for (let i = 0; i < n; i++) {
        if (str[i] === ' ') {
            spaces = spaces + 1;
        }
    }
    // create character array of URL
    const result = new Array(3 * spaces + str.length);
    // i is the insertion index for result
    let i = 3 * spaces + str.length - 1;
    // j is the index of character we are processing
    let j = n - 1;
    while (i >= 0 && j >= 0) {
        if (str[j] === isSpace) {
            result[i] = '0';
            result[i - 1] = '2';
            result[i - 2] = '%';
            i = i - 3;
            j--;
        }
        else {
            result[i] = str[j];
            i--;
            j--;
        }
    }
    return result.join('');
}
exports.URLify = URLify;
//# sourceMappingURL=1.3_URLify.js.map