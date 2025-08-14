package Z;

import java.util.Scanner;

public class Q54 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Size of a array : ");
        int n = sc.nextInt();

        int arr[] = new int[n];
        int sum = 0;

        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        System.out.println("Total Element Sum is : " + sum);
        sc.close();
    }
}
