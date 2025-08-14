//fFond the Greatest element in errry.
package Z;

import java.util.Scanner;

public class Q55 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0;
        int avg;

        System.out.print("Enter Size of a array : ");
        int n = sc.nextInt();

        int arr[] = new int[n];

        for (int i = 0; i < arr.length; i++) {
            System.out.print("Enter the values : ");
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        avg = (int) (sum / n);
        System.out.println("Sum is : " + sum);
        System.out.println("Average is : " + avg);

    }
}
