//print all subarrays
public class Main
{
	public static void main(String[] args) {
		    int nums[] = {1,2,3,4,5,6};
		    int n  = nums.length;
		    
		    for(int i = 0; i < n;i++ ){
		        for(int j = 0; j < n ;j++){
		            for(int k  = i ; k <= j ;k++){
                        System.out.print(nums[k]+ " ");
		            }
		            System.out.println();
		        }
		    }
		  //  System.out.println(maxLen+" ");
	}
}
