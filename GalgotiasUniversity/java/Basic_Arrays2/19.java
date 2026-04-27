import java.util.Arrays;

class InsertionSort {
    public static void main(String[] args) {
        
        int[] arr = { 5, 3, 2, 4, 1 };
        int n  = arr.length;

    for(int i = 0; i < n - 1; i++ )
    {
       int key = arr[i];
       int j = i-1;
       
       // Element ke baad
       while(j >= 0 && key < arr[j]){
            arr[j+1] = arr[j];
            j = j-1; 
       } 
       
       // Inserting the value at correct place now
       arr[j+1] = key;
    }       

    System.out.println(Arrays.toString(arr));   
    }
}