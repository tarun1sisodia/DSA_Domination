import java.util.InputMismatchException;
import java.util.Scanner;

public class q18 {
    public static void main(String[] args) {

        System.out.println("Enter the 3 Numbers.");

        try {
            Scanner sc = new Scanner(System.in);

            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            if (a > b && b > c) {
                System.out.println("A is Big than all");
            } else if (b > a && c > a) {
                System.out.println("B is B/W A & C");
            } else {
                System.out.println("C is Smallest");
            }
        } catch (InputMismatchException e) {
            System.out.println("Something wrong");
        }

    }
}
