"use strict";
/*
    Rotate Matrix: Given an image represented by an
    NxN matrix, where each pixel in the image is 4
    bytes, write a method to rotate the image by 90
    degrees. Can you do this in place?
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizedRotateMatrix = exports.rotateMatrix = void 0;
// naive solution -- not in place
function rotateMatrix(matrix, N) {
    const newMatrix = new Array(N);
    // create matrix
    for (let i = 0; i < N; i++) {
        newMatrix[i] = new Array(N).fill(0);
    }
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            newMatrix[N - 1 - col][row] = matrix[row][col];
        }
    }
    return newMatrix;
}
exports.rotateMatrix = rotateMatrix;
// optimized solution - should rotate the matrix in place with O(1) space
function optimizedRotateMatrix(matrix, N) {
}
exports.optimizedRotateMatrix = optimizedRotateMatrix;
//# sourceMappingURL=1.7_*_Rotate_Matrix.js.map