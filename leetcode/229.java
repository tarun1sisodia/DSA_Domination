class Solution {
    public List<Integer> majorityElement(int[] nums) {

        int ct1 = 0;
        int ct2 = 0;
        int elt1 = Integer.MIN_VALUE;
        int elt2 = Integer.MIN_VALUE;

        // Find candidates
        for (int i : nums) {

            if (ct1 == 0 && i != elt2) {
                ct1 = 1;
                elt1 = i;
            }
            else if (ct2 == 0 && i != elt1) {
                ct2 = 1;
                elt2 = i;
            }
            else if (i == elt1) {
                ct1++;
            }
            else if (i == elt2) {
                ct2++;
            }
            else {
                ct1--;
                ct2--;
            }
        }

        // Verify candidates
        ct1 = 0;
        ct2 = 0;

        for (int i : nums) {
            if (i == elt1) ct1++;
            else if (i == elt2) ct2++;
        }

        List<Integer> ans = new ArrayList<>();
        int mini = nums.length / 3;

        if (ct1 > mini) ans.add(elt1);
        if (ct2 > mini) ans.add(elt2);

        return ans;
    }
}