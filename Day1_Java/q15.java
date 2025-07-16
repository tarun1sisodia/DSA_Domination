import java.util.InputMismatchException;
import java.util.Scanner;

public class q15 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number to Check whether it is Even or Odd");

        try {

            int n = sc.nextInt();
            if (n % 2 == 0) {

                System.out.println("Even: " + n);
            } else if (n % 2 == 1) {
                System.out.println("Odd: " + n);

            }

        } catch (InputMismatchException e) {
            System.out.println("Please Correct Data:");
        }
        sc.close();

    }
}
