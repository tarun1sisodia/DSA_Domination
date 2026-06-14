import java.util.HashSet;
class Solution {

    public static void main(String[] args) {
        int[] nums =  {1,1,23,1,1,43,41,32,23,43,4};
        containsDuplicate(nums);
    }
    public  static boolean containsDuplicate(int[] nums) {
        
        HashSet<Integer> set = new HashSet<>();
        
        for(int i : nums ){
            if(set.contains(i)) return true;
            set.add(i);
        }
        return false;
    }
}