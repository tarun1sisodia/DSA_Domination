class Solution {
    public int diagonalSum(int[][] mat) {
        int n=mat.length,m=mat[0]. length;

        /*int sum=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if((i==j)||(i+j==n-1)){
                    sum+=mat[i][j];
                }
            }
        }
        */
        int sum = 0;
        for(int i =0 ; i <n ;i++){
            sum+= mat[i][i];
            if(i != n-1-i) sum += mat[i][n-1-i];
        }
        return sum;
    }
}