// 14. Find second smallest

import java.util.Scanner;

class array {
    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the size of the array: ");
        n = sc.nextInt();

        int arr[] = new int[n];

        System.out.println("Enter the elements of the array: ");
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        //Remember this for Smallest values.
        int min = Integer.MAX_VALUE;
        int min2 =  Integer.MAX_VALUE;

        System.out.println("Processing elements in the array are: ");
        for(int i = 0; i < n; i++){
            if(arr[i] < min ){
                min2 = min;
                min = arr[i];
            }
            else if(arr[i] < min2 && arr[i] != min){
                min2 = arr[i];
            }
        }

        System.out.println("\nSecond Smallest element in array: " + min2);

        sc.close();
    }
}