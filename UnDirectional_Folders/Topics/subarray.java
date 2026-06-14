// Subarray is a contigous part of array.

//how to get the subarray of array
/*
class Ma {

    public static void main(String[] args) {

        int[] nums = {10,20,30};
        int n = nums.length;

        for(int i = 0; i < n; i++) {

            for(int j = i; j < n; j++) {
// Range for for loop to work on for loop start to end , where i and j.
                for(int k = i; k <= j; k++) {
                    System.out.print(nums[k] + " ");
                }

                System.out.println();
            }
        }
    }
}
*/

/*

// total count the subarray of array
class Ma2 {

    public static void main(String[] args) {

        int[] nums = {10,20,30};
        int n = nums.length;
        int count = 0;

        for(int i = 0; i < n; i++) {
            
            for(int j = i; j < n; j++) {
                count++;
            }
        }
        System.out.println(count);
    }
}*/

//sum of all subarrays.
class Main {
    public static void main(String[] args) {

        int[] nums = {1,2,3};
        int n = nums.length;
        int finalsum = 0;
        for(int i = 0; i < n; i++) {
            for(int j = i; j < n; j++) {
                // Sum will rest everytime when the loop finishes . 
                int sum = 0;

                for(int k = i; k <= j; k++) { 
                    // now store and print the sum of every subarray which are finding.
                    sum += nums[k];
                    // now here all the sum of all subarray will be stored
                }
                System.out.println(sum); 
                finalsum += sum;
            }
        }
        System.out.println(finalsum);
    }
}

class Maa {

    public static void main(String[] args) {

        int[] arr = {1,2,3,1,1,1};
        int k = 3;

        int n = arr.length;

        int maxLen = 0;

        for(int i = 0; i < n; i++) {

             int sum = 0;
            for(int j = i; j < n; j++) {         
                sum += arr[j];
                if(sum == k) {

                    int len = j - i + 1;

                    maxLen = Math.max(maxLen, len);
                }
            }
        }

        System.out.println(maxLen);
    }
}

class main2
{
    public static void main(String[] args) {
    int nums[] = {};
    int max = Integer.MIN_VALUE;
    int n = nums.length;

    for(int  = 0; i < n ;i++){
        sum += nums[i];
        max = Math.max(max,sum);
        if(sum < 0 ) sum = 0;
    }
    return max;
    }
}