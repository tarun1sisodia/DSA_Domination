class Main{
    public static void main(String[] args) {
        int[] arr = {10,20,30,40,50};
        int n = arr.length;
        call(0,arr,n-1);
        for (int i  : arr) {
            System.out.println(i+" ");
        }
    }
    public static void call(int k, int[] arr, int p){
        if(k >= p) return;
        swap(arr,k,p);
        call(k+1,arr,p-1);
    }
    public static void swap(int[] arr, int k, int p){
        int temp = arr[k];
        arr[k] = arr[p];
        arr[p] = temp;
    }
}