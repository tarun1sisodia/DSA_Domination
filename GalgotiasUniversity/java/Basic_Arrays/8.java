// Count positive Elements in array.
import java.util.Scanner;

class array {
    public static void main(String[] args) {
        int n, count = 0;
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the size of the array: ");
        n = sc.nextInt();

        int arr[] = new int[n];

        System.out.println("Enter the elements of the array: ");
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }

        System.out.println("Positive elements in the array are: ");
        for(int i = 0; i < n; i++){
            if(arr[i] > 0){
                count++;
                System.out.print(arr[i] + " ");
            }
        }

        System.out.println("\nCount of positive elements in array: " + count);

        sc.close();
    }
}