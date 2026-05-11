public class Main
{
	public static void main(String[] args)
	{
        int[] nums = {1,2,3,5};

        int n = 5;

        //create a new array of size 1 more.
        int[] hash = new int[n + 1];

        // Now fill array with 1 of array.
        for(int i = 0; i < nums.length; i++)
        {
            hash[nums[i]] = 1;
        }

        // now traverse array from 1 to n, kyunki ab hume bs travse krna h 0 find krna h,
        // linear Search lag rha h yahan.
        for(int i = 1; i <= n; i++)
        {
            if(hash[i] == 0)
            {
                System.out.println("Missing Number: " + i);
            }
        }

        // another approachs

        static void sum(int[] nums){
        int[] nums = {1,2,3,5};

        int n = nums.length;
        
        int N = n + 1;

        int sum = (N * (N + 1)) / 2;

        int sum1 = 0;

        for(int i = 0; i < n; i++)
        {
            sum1 += nums[i];
        }

        int missing = sum - sum1;

        System.out.println(missing);
        }

        // Optimal Sol^

        
	
	}
}