

function rotate90(mat) {
    let n = mat.length;

    // Step 1: Create empty 2D array manually
    let res = [];
    for (let i = 0; i < n; i++) {
        res[i] = []; // create each row manually
    }

    // Step 2: Fill rotated values
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[j][n - 1 - i] = mat[i][j];
        }
    }

    return res;
}

function areSame(mat1, mat2) {
    for (let i = 0; i < mat1.length; i++) {
        for (let j = 0; j < mat1.length; j++) {
            if (mat1[i][j] !== mat2[i][j]) return false;
        }
    }
    return true;
}

function findRotation(mat, target) {
    for (let r = 0; r < 4; r++) { // at most 4 rotations to return to original
        if (areSame(mat, target)) return true;
        mat = rotate90(mat); // rotate matrix by 90° each time
    }
    return false;
}

// Test
let mat = [
  [0, 1],
  [1, 0]
];
let target = [
  [1, 0],
  [0, 1]
];

console.log(findRotation(mat, target)); // true
