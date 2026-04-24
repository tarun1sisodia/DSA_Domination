// 13. Find second largest

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
        //Remember this for MIN value
        int max = Integer.MIN_VALUE;
        int max2 =  Integer.MIN_VALUE;

        System.out.println("Processing elements in the array are: ");
        for(int i = 0; i < n; i++){
            if(arr[i] > max ){
                max2 = max;
                max = arr[i];
            }
            else if(arr[i] > max2 && arr[i] != max){
                max2 = arr[i];
            }
        }

        System.out.println("\nSecond Largest element in array: " + max2);

        sc.close();
    }
}