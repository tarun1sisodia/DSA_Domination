class Mai{
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50};
        int n = arr.length;
        call(0,arr,n);
        for (int i  : arr) {
            System.out.println(i+" ");
        }
    }
    public static void call(int k, int[] arr, int n){
        if(k >= n/2) return;
        swap(k, arr,n);
        call(k+1, arr, n);
    }
    public static void swap(int k, int[] arr,int n){
        int temp = arr[k];
        arr[k] = arr[n-k-1];
        arr[n-k-1] = temp;
    }
}