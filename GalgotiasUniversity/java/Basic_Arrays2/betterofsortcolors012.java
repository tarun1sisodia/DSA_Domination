public class Main {

    public static void main(String[] args) {

        int nums[] = {1,2,0,2,0,1,2,1,0,1 };
        
        int n = nums.length;
        
        int cot0 = 0;
        int cot1 = 0;
        int cot2 =0;
        
        // Traversing array.
        
        for(int i = 0; i < n; i++)
        {
            if(0 ==  nums[i]) cot0++;
            else if(1 == nums[i]) cot1++;
            else cot2++;
        }
        
        //Fill the Array or update the array with the latest find results.
        
        for(int i =0; i < cot0; i++) {
            nums[i] = 0;   
        }
        
        for(int i = cot0; i < cot0+cot1 ; i++) {
            nums[i] = 1;
        }
        
        for(int i = cot0+cot1; i < n; i++) {
            nums[i] = 2;
        }
        
        
        for(int i = 0 ;i < n;i++){
            System.out.print(nums[i]+" ");
        }
        
    
    }
}