
// Transpose of a matrix

function transpose(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];

    //💡 Simple analogy Ye pehla loop ek container banane ka kaam kar raha hai — pehle dabbe bana rahe hain, phir inner loop me un dabbon me saman (values) bhar rahe hain.
    for (let i = 0; i < cols; i++) {
        result[i] = [];
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}

// Example
let arr = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(transpose(arr));