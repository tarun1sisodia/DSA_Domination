// 12. Find minimum element

import java.util.Scanner;
 class array{
    public static void main(String[] args) {
        int n, min;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array: ");
        n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter the elements of the array: ");
        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }
        min = arr[0];
        for(int i=1; i<n; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        System.out.println("The minimum element of the array is: " + min);
        sc.close();
    }
}