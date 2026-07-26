class Solution {
    public int maxArea(int[] height) {
        /* Brute, Hits TLE.. 
            how we calculate area of a rectangle, be calculate using area = width * height.
            width = j-i
            height = min(height[i],height[j]);

        int maxArea = 0;
        int n = height.length;
        for(int i = 0 ; i <= n-2; i++){
            for(int j = i+1; j < n ; j++){

                int area = (j-i)*Math.min(height[i],height[j]);

                if(area > maxArea) maxArea = area;
            }
        }
        return maxArea;
        */

        /*Optimized approach

        */

        int maxArea = 0;
        int n = height.length;
        int i = 0;
        int j = n-1;

        while(i < j){
            
            int width = j-i;
            int minHeight = Math.min(height[i],height[j]);
            // rectangle area calculation
            int area = width * minHeight;
            
            //we need max..
            maxArea = Math.max(area,maxArea);

            if(height[i] <= height[j]) i++;  //simple, left is smaller if you decrease the larger then there is less chance that you will have minimum.
            else j--;
        }
        return maxArea;
    }
}