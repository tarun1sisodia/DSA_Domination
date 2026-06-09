class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> ans = new ArrayList<>();
        int n = nums.length;

        for (int i = 0; i < n; i++) {

            if (ans.contains(nums[i]))
                continue;

            // the count will reset everytime , so we can count the candidates.
            int count = 0;
            //founding the same element from 0 to n.
            for (int j = 0; j < n; j++) {
                if (nums[j] == nums[i])
                    count++;
            }
            //there will be only 2 elements in the array for always to store it . 
            if (count > n / 3)
                ans.add(nums[i]);
        }

        return ans;
    }
}