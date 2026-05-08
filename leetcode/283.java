class Solution {
    public void moveZeroes(int[] nums) {
        int n = nums.length;
        int j = 0;
        for(int i = 0; i < n ;i++){
            if(nums[i] == 0){j = i; break;}
        }
        for(int i = j + 1 ; i < n; i++){
            if(nums[i] != 0){
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j++;
            }
        }
    }
}

class Solution1 {
        public static void main(String[] args) {
            int nums[] = {1,0,2,1,3,4,0,3,0,0,0,4,1,1};
        int n = nums.length;
        //because we supposing array doesn't contain any 0 in array.
        int j = -1;

        for(int i = 0; i < n ;i++){
            if(nums[i] == 0){
                j = i;
                break;
            }
        }
        if(j == -1) return; // Checking that j is still -1 or not if yes then array doesn't contain any 0 in iteself and now we will just  return the array.
        // starting from j+1 because we don't know where we iwll find the first j where it will zero
        for(int i  = j+1; i < n; i++){
            //now we are checking ht enon zero elements to swap with the xero elements
            if(nums[i] != 0){
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                // j increasing because we need to know where we last time update j and current.
                 j++;
            }
        }
        for (int  k  : nums ) {
            System.out.println(k+" ");
        }
    }
}

