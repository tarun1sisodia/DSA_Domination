class Solution {

    public static void main(String[] args) {
        int nums[]  = {0,0,1,1,1,2,2,3,4};
        if (nums.length == 0) return;

        int i = 0; //uniqueness maintain.

        for (int j = 1; j < nums.length; j++) {

            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        for (int k   : nums ) {
            System.out.println(k);
        }
        System.out.println("After Sorting array..");
        for(int j = 0; j <= i; j++){
            System.out.println(nums[j]+ " ");
        }
    }
}