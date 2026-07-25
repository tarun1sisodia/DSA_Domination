class Solution {
    public int[] productExceptSelf(int[] nums) {
        // We used O(N) in TC & SC.
        /* i watched two solution video, and both solved this differently.. this approach is about to solve using extra space But it will take optimal in Time not in Space.. for achieving O(1) we will implement the same logic in direct in place rather than extra space...

        int n = nums.length;

        //Prefix array..
        int prefix[] = new int[n];
        prefix[0] = nums[0]; //we need data for processing next elements.

        for(int i = 1; i < n; i++){
         prefix[i] = prefix[i-1] * nums[i]; // Product of all elements from index 0 to i
        }
        //For PostFix array which will have the all the values from right to left...
        int postfix[] = new int[n];
        postfix[n-1] = nums[n-1]; // required again like prefix.

        for(int i = n-2; i >= 0; i--){ 
         postfix[i] = postfix[i+1] * nums[i]; //// Product of all elements from index i to n-1
        }

        //final answer array 
        int ans[] = new int[n];

        for(int i = 0; i < n ; i++){
            
            //This logic i didn't generated but i knew that we have to follow the logics.. cuz i saw videos...
            int left = (i == 0) ? 1 : prefix[i-1];  
            int right = ( i == n -1) ? 1 : postfix[i+1];
            ans[i] = left* right;    
        }
        return ans;
        */

        // Reducing the Space.

        /* now we have to compute everything on the final array...*/
        int n = nums.length;
        int answer[] = new int[n];

        answer[0] = 1;
        //for Prefix computation we need this..
        for(int i = 1 ; i < n ; i++){
            answer[i] = answer[i-1] * nums[i-1];
        }

        //suffixx
        int suffix = 1;
        for(int i  = n-2; i >=0; i--){
            suffix = suffix * nums[i+1];
            answer[i] = answer[i] * suffix;
        }
    return answer;        
    }
}