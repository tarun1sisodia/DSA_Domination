
function spiralOrder(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while(top <= bottom && left <= right) {
        // Traverse right (top row)
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;  // Move top boundary down

        // Traverse down (right column)
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;  // Move right boundary left

        // Traverse left (bottom row) - only if there's room
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;  // Move bottom boundary up
        }

        // Traverse up (left column) - only if there's room
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;  // Move left boundary right
        }
    }

    return result;
}

// Example usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix));