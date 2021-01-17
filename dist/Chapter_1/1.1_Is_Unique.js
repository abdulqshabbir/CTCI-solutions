"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnique = void 0;
function isUnique(str) {
    // Here we are assuming the string is given in ASCII format.  ASCII defines 128 characters which map to the numbers from 0 - 127.
    // time complexity of this solution is O(n) where n is the number of characters in the string
    // space complexity of this solution is O(1) since the map will contain at most 128 unique keys before the function returns
    const map = new Map();
    for (const char of str) {
        if (map.has(char)) {
            return false;
        }
        else {
            map.set(char, 1);
        }
    }
    return true;
}
exports.isUnique = isUnique;
//# sourceMappingURL=1.1_Is_Unique.js.map