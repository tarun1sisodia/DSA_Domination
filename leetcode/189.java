class solution{
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50,60,70};
        int k = 4;
        rotate(arr,k);   
    }
    public static void rotate(int[] arr, int k){
        int n = arr.length;
        int k = k % n;
        
        //puri array reverse
        reverse(arr,0,n-1);
        
        //first k elements reverse kroo
        reverse(arr,0,k-1);

        // bache huye age wale elements k and n-1 tk
        reverse(arr,k,n-1);

        for(int i : arr){
            System.out.println(i+" ");
        }

    }
    public static void reverse(int[] arr, int start, int end){
        while(start < end){
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}