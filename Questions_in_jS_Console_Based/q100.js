//This is using extra space.
function zeroMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let flagRows = [];
    let flagCols = [];
    //Creating 2d Array for boolean true or false to marks array.
    for (let i = 0; i < rows; i++) {
        flagRows[i] = false;
    }
    for (let j = 0; j < cols; j++) {

        flagCols[j] = false;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                flagRows[i] = true;
                flagRows[j] = true;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (flagRows[i] || flagCols[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

let matrix = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
];

console.log(zeroMatrix(matrix));

function zeroMatrix2(matrix) {

}