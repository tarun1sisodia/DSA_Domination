class Solution {

    public void rotate(int[][] matrix) {

        int n = matrix.length;

        // Transpose matrix
        for (int i = 0; i < n; i++) {

            for (int j = i + 1; j < n; j++) {

                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        // Reverse each row
        for (int i = 0; i < n; i++) {

            reverse(matrix, i, 0, n - 1);
        }
    }

    public void reverse(int[][] matrix, int i, int start, int end) {

        while (start < end) {

            int temp = matrix[i][start];

            matrix[i][start] = matrix[i][end];

            matrix[i][end] = temp;

            start++;
            end--;
        }
    }
}