// 3. Print alternate elements
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
        System.out.println("The alternate elements of the array are: ");
        for(int i=0; i<n; i+=2){
            System.out.print(arr[i] + " ");
        }
        sc.close();
    }
}