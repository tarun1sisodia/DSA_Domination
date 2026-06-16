class Main
{
    public static void main(String[] args) {
        
        int arr[] = {-1,0,1,2,-1,-4};
        int n = arr.length;
       
    }
    //brute force approach
    static void printTriplet(int arr[], int n){
        Set<List<Integer>> ans = Arrays.asList<>();
       for(int  = 0 ; i < n-2 ; i--){
        for(int j = i+1; j < n-1 ;j++){
            for(int k = j+1; k < n ; k++){
                if(nums[i]+nums[j]+nums[k]==0) {
                    List<Integer> temp = Arrays.asList<>(nums[i],nums[j],nums[k]);
                    Arrays.sort(temp);
                    ans.add(temp);
                }
            }
         }
       }
    }
    //better approach using hashing
    static void printTriplet2(int arr[], int n){
        Set<List<Integer>> ans = Arrays.asList<>();
        Set<Integer> set = new HashSet<>();
        Arrays.sort(arr);
        for(int i : arr){
            set.add(i);
        }
        for(int i  = 0 ; i < n-1;i++){
            for(int j = i+1; j < n ;j++){
                int third = -(arr[i]+arr[j]);
                if(set.contains(third)){
                    List<Integer> temp = Arrays.asList<>(arr[i],arr[j],third);
                    Arrays.sort(temp);
                    ans.add(temp);
                }
            }
        }

    }

    static void printTriplet3(int arr[], int n){
        Set<List<Integer>> ans = Arrays.asList<>();
        //we did the sort already in the previous approach so we can skip that step here but we will do it again for clarity.
        Arrays.sort(arr);
        for(int i  = 0 ; i < n-1;i++){
            //now we know the j will be always next 
            int j = i+1;
            // setting the boundary in which the j and k will run.
            int k = n-1;
            //two pointer approach
            while(j < k){
                //Sum
                int sum = arr[i]+arr[j]+arr[k];
                //if we found like target == sum or arr[mid] just like we do in binary search then we will add the triplet to the answer and move both the pointers.
                if(sum == 0){
                    // List<Integer> temp = Arrays.asList<>(arr[i],arr[j],arr[k]);
                    ans.add(Arrays.asList(arr[i],arr[j],arr[k]));
                    j++;
                    k--;
                }
                // sum is less than target then we need to increase the sum so we will move the left pointer to right.
                else if(sum < 0) j++;
                // sum is greater than target then we need to decrease the sum so we will move the right pointer to left.
                else k--;
            }
        }
    }


}