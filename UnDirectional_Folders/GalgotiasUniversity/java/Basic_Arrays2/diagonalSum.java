public class Main {

    public static void main(String[] args) {

        int[][] nums = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int n = nums.length;
        int m = nums[0].length;

        int sum = 0;

        for(int i = 0; i < n; i++) {

            for(int j = 0; j < m; j++) {

                // primary diagonal , left to right to bottom
                if(i == j) {
                    sum += nums[i][j];
                }

                // secondary diagonal, left to right in upward
                else if(i + j == n - 1) {
                    sum += nums[i][j];
                }
            }
        }

        System.out.println(sum);
    }
}