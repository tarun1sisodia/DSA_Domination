class Solution {
    public void nextPermutation(int[] nums) {
        int dip = -1;
        //first find the dip.. in array.
        int n = nums.length;
        for(int i = n-2; i >= 0 ;i--){  // n-2 because checking the valley.
            if(nums[i] < nums[i+1]) {
                dip = i;
                break;
            }
        }
        if(dip == -1) {
            reverse(nums,0,n-1);
            return;
        }
        //find the smallest within the dip to n-1; but it should be greater than it.
       

        for(int i = n-1; i > dip; i--){
            if(nums[i] > nums[dip])
            {
                int temp = nums[i];
                nums[i] = nums[dip];
                nums[dip] = temp;
                break;
            }
        }
        reverse(nums,dip+1,n-1);

    }
    static void reverse(int[] nums,int start, int end){
        while(start < end){
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}