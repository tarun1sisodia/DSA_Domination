import java.util.InputMismatchException;
import java.util.Scanner;

public class q16 {
    public static void main(String[] args) {
        System.out.println("Voter's Verification:");

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Voter name:");
        try {

            String name = sc.nextLine();
            int age = sc.nextInt();
            if (age >= 18) {
                System.out.println("Hey, " + name + " You are Valid voter.");
            } else {
                System.out.println("Hey, " + name + "You are not valid voter");
            }
        } catch (InputMismatchException e) {
            System.out.println("Enter Correct data.:");

        }
        sc.close();
    }
}
