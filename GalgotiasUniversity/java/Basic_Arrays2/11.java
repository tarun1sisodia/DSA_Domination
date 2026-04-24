// 11. Find maximum element
import java.util.Scanner;
 class array{
    public static void main(String[] args) {
        int n, max;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array: ");
        n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter the elements of the array: ");
        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }
        max = arr[0];
        for(int i=1; i<n; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        System.out.println("The maximum element of the array is: " + max);
        sc.close();
    }
}