//This is using extra space.
function zeroMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let flagRows = new Array(rows).fill(false);
    // let flagRows = [];
    // let flagCols = [];
    let flagCols = new Array(cols).fill(false);


    //Trick to make an array.
    //Creating 2d Array for boolean true or false to marks array.
    /*  for (let i = 0; i < rows; i++) {
         flagRows[i] = false; // for all rows element it will be false; by default.
     }
     for (let j = 0; j < cols; j++) {
         flagCols[j] = false; //it will also false the whole columns.
     } */



    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) { //pehle hum search to krle ki koi element 0 h bhi ki nhi ..
                flagRows[i] = true; //now hum us row aur col ko mark kr rhe h true h ki nh taki future m usko update kr sake.
                flagRows[j] = true;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (flagRows[i] || flagCols[j]) { //agr true h to us matrix ki element rows and col ko 0 krdo.
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