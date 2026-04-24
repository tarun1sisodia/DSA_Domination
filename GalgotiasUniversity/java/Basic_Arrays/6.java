// 6. Sum of all elements

import java.util.Scanner;
 class array{
    public static void main(String[] args) {
        int n, sum = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array: ");
        n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter the elements of the array: ");
        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        System.out.println("The sum of all elements of the array is: " + sum);
        sc.close();
    }
}