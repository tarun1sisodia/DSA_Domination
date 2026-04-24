// 7. Average of elements
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
        double average = (double)sum / n;
        System.out.println("The average of all elements of the array is: " + average);
        sc.close();
    }
}