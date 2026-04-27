import java.util.Arrays;

class BubbleSort {
    public static void main(String[] args) {
        
        int[] arr = {18,0,25,19,33};
        
        boolean swapped;
        int swappedCounter = 0;

        // Run Atleast One time Then -> Condition Check of sorting.
        do {
            swapped = false;
            
            for(int i = 0 ; i < arr.length-1 ; i++) {

                // Comparing Left to Right element
                if(arr[i] > arr[i+1]) {

                    // Swapping
                    int temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    
                    // Update
                    swapped = true;
                    swappedCounter++;
                }
            }
            
        } while(swapped);
        
        System.out.println(Arrays.toString(arr));
        System.out.println("Swaps = " + swappedCounter);
    }
}