
public class Main
{
	public static void main(String[] args) {
		int[] arr = {};
		//if size is 0 then 0 because the longest is 2 by default;;
		if(arr.length == 0) return 0;
		int longest = 1;
		int n = arr.length;
		
		for(int i = 0; i < n; i++){
		    // taking x and checking does it's next sequence exists or not..
		    int x = arr[i];
		    int count = 1;
		    //Running another loop and for linear search.
		    while(exists(arr,x+1)== true){
		        //if found then increase the x.
		        x++;
		        count++;
		    }
		    longest = Math.max(longest,count);
		}
		return longest;
	}
	
	static boolean exists(int[] arr, int target){
	    for(int num : arr){
	        if(num == target) return true;
	    }
	    return false;
	}
}
