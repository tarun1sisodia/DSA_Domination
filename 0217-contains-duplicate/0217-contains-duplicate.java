class Solution {
    public boolean containsDuplicate(int[] nums) {

        HashSet<Integer> set = new HashSet<>();
        boolean ans  = false;
        for(int i = 0 ; i < nums.length ; i++){
            
            if(set.contains(nums[i])) {
                return ans = true;
            }
            else        
                set.add(nums[i]);
        }
        return ans;

        // int count = 0;
        // int n = nums.length;
        // for(int i =0 ;i < n -1 ;i++){
        //     for(int j = i+1; j < n ; j++){
        //         if(nums[i] == nums[j]) count++;
        //     }
        //     if(count >= 1) return true;
        // }
        // return false;
    }
    
    //create map.. & count = 0; // or we can directly get the value of map element if it is larger then return false.
    // start loop . if find same element during then increase the the value of that key.
    // else a new map.put(nums[i],0);
    //store all the value with their count 
    // if count >1 then return false.
    // outside return true.
}