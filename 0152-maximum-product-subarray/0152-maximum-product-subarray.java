class Solution {
    public int maxProduct(int[] nums) {
        int maxi = Integer.MIN_VALUE;

        int prefix = 1;
        for(int num : nums){
            if(num == 0) {
                prefix = 1;
                maxi = Math.max(maxi,num);
                continue;
            }
            prefix *= num;
            maxi = Math.max(maxi,prefix);
        }
        
        int suffix = 1;
        for(int i = nums.length-1; i >= 0 ; i--){
            if(nums[i] == 0){
                suffix = 1;
                maxi = Math.max(maxi,nums[i]);
                continue;
            }
            suffix *= nums[i];
            maxi = Math.max(maxi,suffix);
        }
        return maxi;
    }
}