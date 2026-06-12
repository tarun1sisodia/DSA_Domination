class Solution {

    public static void main(String[] args) {
        int nums[]  = {0,0,1,1,1,2,2,3,4};
        if (nums.length == 0) return;

        int j = 0; //uniqueness maintain.

        for (int i : nums) {

            if (i != nums[j]) {
                j++;
                nums[j] = i;
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

class Solution2 {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;

        HashSet<Integer> set = new HashSet<>();
        int j = 0; //uniqueness maintain.
        for (int i :nums) {
            if (!set.contains(i)) {
                set.add(i);
                //here we are updatin the original array with the unique elements and maintaining the count of unique elements in j.
                nums[j] = i;
                j++;    
            }
        }
        return j;
    }
}   


