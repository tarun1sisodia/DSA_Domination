// 4. Print even-index elements
// Because we know that we have to only go to those indexes which are even so we will just loop them and run the code for 0 to even.
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
        System.out.println("The EVEN INDEX elements of the array are: ");
        for(int i=0; i<n; i+=2){
            System.out.print(arr[i] + " ");
        }
        sc.close();
    }
}