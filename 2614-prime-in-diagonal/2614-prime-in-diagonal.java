class Solution {
   public int diagonalPrime(int[][] nums) {
    int n = nums.length;
    int val = 0;

    for (int i = 0; i < n; i++) {
        if (checkPrime(nums[i][i])) {
            val = Math.max(val, nums[i][i]);
        }

        if (i != n - 1 - i && checkPrime(nums[i][n - 1 - i])) {
            val = Math.max(val, nums[i][n - 1 - i]);
        }
    }

    return val;
}
     boolean checkPrime(int n){

        if(n <= 1) return false;
        if(n == 2) return true;
        if(n %2 == 0 ) return false;
        for(int i = 3 ; i*i <= n ;i+=2){
            if(n %i == 0) return false;
        }
        return true;
    }
}