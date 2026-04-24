import java.util.Scanner;

class array {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input
        System.out.print("Enter size of array: ");
        int n = sc.nextInt();

        System.out.print("Enter value of k: ");
        int k = sc.nextInt();

        // Edge case check
        if (k <= 0 || k > n) {
            System.out.println("Invalid value of k");
            return;
        }

        int arr[] = new int[n];

        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        // Bubble Sort in ASCENDING order
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        // kth Smallest element
        int kthSmallest = arr[k - 1];

        // Output
        System.out.println("Kth Smallest element is: " + kthSmallest);

        sc.close();
    }
}