class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Set<List<Integer>> ans = new HashSet<>(); // for original ans to contain..

        int n = nums.length;

        for(int i  =0 ; i <n; i++){ // O(N)

            HashSet<Integer> seen = new HashSet<>(); //for temporary holding the unique element which we found and can be a possible solution.
            for(int j = i+1; j < n ; j++){ // O(N)
                int third = -(nums[i]  + nums[j]);

                if(seen.contains(third)){
                    List<Integer> temp = Arrays.asList(nums[i],nums[j],third);
                    Collections.sort(temp);
                    ans.add(temp);
                }
                seen.add(nums[j]);
            }
        }

        return new ArrayList<>(ans);
    }
}