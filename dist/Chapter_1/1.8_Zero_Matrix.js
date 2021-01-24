"use strict";
/*
    Zero Matrix: Write an algorithm such that if an element in an
    MxN matrix is 0,its entire row and column are set to 0.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizedZeroMatrix = exports.zeroMatrix = void 0;
// time complexity: O(nm) where n is the number of rows and m is the number of columns
// space complexity: O(nm) since a new visited matrix is created of the same size
function zeroMatrix(matrix) {
    // n x m matrix
    const n = matrix.length;
    const m = matrix[0].length;
    const visited = [];
    // set up flag for if a cell has been visisted
    for (let i = 0; i < n; i++) {
        visited[i] = [];
        for (let j = 0; j < m; j++) {
            visited[i][j] = false;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0 && !visited[i][j]) {
                createZeroRow(matrix, i, m, visited);
                createZeroColumn(matrix, j, n, visited);
            }
        }
    }
    return matrix;
}
exports.zeroMatrix = zeroMatrix;
function createZeroRow(matrix, zeroRow, columns, visited) {
    for (let i = 0; i < columns; i++) {
        matrix[zeroRow][i] = 0;
        visited[zeroRow][i] = true;
    }
    return matrix;
}
function createZeroColumn(matrix, zeroColumn, rows, visited) {
    for (let i = 0; i < rows; i++) {
        matrix[i][zeroColumn] = 0;
        visited[i][zeroColumn] = true;
    }
    return matrix;
}
function optimizedZeroMatrix(matrix) {
    const rowsToNullify = new Array(matrix.length).fill(false);
    const colsToNulify = new Array(matrix.length[0]).fill(false);
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                rowsToNullify[row] = true;
                colsToNulify[col] = true;
            }
        }
    }
    // nullify rows
    for (let i = 0; i < rowsToNullify.length; i++) {
        if (rowsToNullify[i] === true) {
            matrix = nullifyRow(matrix, i);
        }
    }
    // nullfiy cols
    for (let i = 0; i < colsToNulify.length; i++) {
        if (colsToNulify[i] === true) {
            matrix = nullifyCol(matrix, i);
        }
    }
    return matrix;
}
exports.optimizedZeroMatrix = optimizedZeroMatrix;
function nullifyRow(matrix, row) {
    // iterate over all cells in a particular row and set entries to zero
    const cols = matrix[0].length;
    for (let i = 0; i < cols; i++) {
        matrix[row][i] = 0;
    }
    return matrix;
}
function nullifyCol(matrix, col) {
    // iterate over all cells in a particular row and set entries to zero
    const rows = matrix.length;
    for (let i = 0; i < rows; i++) {
        matrix[i][col] = 0;
    }
    return matrix;
}
//# sourceMappingURL=1.8_Zero_Matrix.js.map