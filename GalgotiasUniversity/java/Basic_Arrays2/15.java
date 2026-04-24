// 15. Difference between max and min

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
        int max =  Integer.MIN_VALUE;

        System.out.println("Processing elements in the array are: ");
        for(int i = 0; i < n; i++){
            if(arr[i] < min ){
                min = arr[i];
            }
            else if(arr[i] > max){
                max = arr[i];
            }
        }

        System.out.println("\n Difference between Max & Min in array: " + (max-min));

        sc.close();
    }
}