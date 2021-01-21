/*
    Zero Matrix: Write an algorithm such that if an element in an
    MxN matrix is 0,its entire row and column are set to 0.
*/

export function zeroMatrix(matrix: number[][]) {
    debugger;
    // n x m matrix
    const n = matrix.length
    const m = matrix[0].length
    const visited: boolean[][] = []

    // set up flag for if a cell has been visisted
    for (let i = 0; i < n; i++) {
        visited[i] = []
        for (let j = 0; j < m; j++) {
            visited[i][j] = false
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0 && !visited[i][j]) {
                createZeroRow(matrix, i, m, visited)
                createZeroColumn(matrix, j, n, visited)
            }
        }
    }
    return matrix
}

function createZeroRow(matrix: number[][], zeroRow: number, columns: number, visited: boolean[][]) {
    for (let i = 0; i < columns; i++) {
        matrix[zeroRow][i] = 0
        visited[zeroRow][i] = true
    }
    return matrix
}

function createZeroColumn(matrix: number[][], zeroColumn: number, rows: number, visited: boolean[][]) {
    for (let i = 0; i < rows; i++) {
        matrix[i][zeroColumn] = 0
        visited[i][zeroColumn] = true
    }
    return matrix
}

// to-do: optimize code to use less space