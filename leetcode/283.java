class Solution {
    public void moveZeroes(int[] nums) {
        int n = nums.length;

        //Creating extra because right now i am applying the brute frce approach for now.
        int temp[] = new int[n];
        // index is for managing the future index for array.
        int index = 0;
        // adding the at in temp arry from the original array.
        for(int i = 0; i < n; i++){
            // if the original arrya doesn'tcontain 0;
            if(nums[i]!= 0){
                // storing the data into temp array.
                temp[index] = nums[i];
                //for temporary next index;
                index++;
            }
        }

        // now we wil modify the original array using temp and its limits.

        for(int i = 0; i < n ;i++){
            nums[i] = temp[i];
        }

        //now we will add the 0 to end of array for that we will traverse the array from indx to n.

        for(int i = index ; i < n; i++){
            nums[i] = 0;
        }
    }
}

