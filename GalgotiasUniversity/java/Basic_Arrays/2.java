// 2. Print in reverse
import java.util.Scanner;
 class array{
    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array: ");
        n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter the elements of the array: ");
        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("The elements of the array in reverse order are: ");
        for(int i=n-1; i>=0; i--){
            System.out.print(arr[i] + " ");
        }
        sc.close();
    }
}