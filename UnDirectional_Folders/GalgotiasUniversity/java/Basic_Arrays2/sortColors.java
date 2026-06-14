public class Main {

    public static void main(String[] args) {

        int[] nums = {1,2,0,2,0};

        int n = nums.length;

        int low = 0;
        int mid = 0;
        int high = n - 1;

        while(mid <= high) {

            // if 0
            if(nums[mid] == 0) {

                swap(nums, low, mid);

                low++;
                mid++;
            }

            // if 1
            else if(nums[mid] == 1) {

                mid++;
            }

            // if 2
            else {

                swap(nums, high, mid);

                high--;
            }
        }

        // print array
        for(int num : nums) {
            System.out.print(num + " ");
        }
    }

    // swap using indices
    static void swap(int[] nums, int a, int b) {

        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
}