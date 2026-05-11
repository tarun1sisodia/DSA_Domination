class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        //hume bs 2 var ki need h aur, 
        int max = 0;
        int count = 0;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] == 1){
                count++;
            }
            else
            {
                max = Math.max(max,count);
                count = 0; 
            }
        }
        max = Math.max(count,max);
        return max;
    }
}