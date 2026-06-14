import java.util.Scanner;

public class sum_of_number_range{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int start = sc.nextInt();
        int end = sc.nextInt();
        int sum = 0;
        for (int i = start; i <= end; i++) {
            sum += i;
        }
        System.out.println("Sum of Range: " + sum);
        // System.out.println(end-start+1);
        // System.out.println((end/2)-((start-1)/2));
    }
}