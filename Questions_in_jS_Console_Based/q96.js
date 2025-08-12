

function rotate90(mat) {
    let n = mat.length;

    // Step 1: Create empty 2D array manually
    let res = [];
    for (let rows = 0; rows < n; rows++) {
        res[rows] = []; // create each row manually
    }

    // Step 2: Fill rotated values
    for (let rows = 0; rows < n; rows++) {
        for (let cols = 0; cols < n; cols++) {

            res[cols][n - rows - 1] = mat[rows][cols];
        }
    }

    return res;
}

function areSame(mat1, mat2) {
    for (let rows = 0; rows < mat1.length; rows++) {
        for (let cols = 0; cols < mat1.length; cols++) {
            if (mat1[rows][cols] !== mat2[rows][cols]) return false;
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


function findRotation2(mat, target) {
    let n = mat.length;

    for (let r = 0; r < 4; r++) {
        let match = true;
        for (let rows = 0; rows < n; rows++) {
            for (let cols = 0; cols < n; cols++) {
                let x, y;
                if (r === 0) {
                    x = rows;
                    y = cols;
                } else if (r === 1) {
                    x = n - cols - 1;
                    y = rows;
                } else if (r === 2) {
                    x = n - rows - 1;
                    y = n - cols - 1;
                } else {
                    x = cols;
                    y = n - rows - 1;
                }
                /*4) The code logic (what if (mat[x][y] !== target[rows][cols]) does)
                For each rotation r (0..3):
                
                Assume match = true.
                
                For every rows and cols:
                
                compute (x,y) using formula for that r
                
                if mat[x][y] !== target[rows][cols] → this rotation fails → set match = false and break early
                
                If the whole double loop completes with match still true, return true.
                
                If none of the 4 rotations matched, return false.
                
                Early break saves time — as soon as one mismatch occurs we stop checking the rest of the matrix for that rotation.*/
                if (mat[x][y] !== target[rows][cols]) {
                    match = false;
                    break;
                }
            }
            if (!match) break;
        }
        if (match) return true;
    }
    return false;
}

