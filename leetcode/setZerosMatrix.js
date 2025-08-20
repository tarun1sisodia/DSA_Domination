//

let matrix = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
];
function setZeroes(matrix) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    let nRows = new Array(rows).fill(false);
    let nCols = new Array(cols).fill(false);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                nRows[i] = true;
                nCols[j] = true;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (nRows[i] || nCols[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

console.log(setZeroes(matrix));

