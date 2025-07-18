import java.util.InputMismatchException;
import java.util.Scanner;

public class q22 {
    public static void main(String[] args) {
        System.out.println("Enter Only 1 Alphabet to test:");
        Scanner sc = new Scanner(System.in);
        try {
            char ch = sc.nextLine().charAt(0);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
                System.out.println("Vowel.. found");
            else
                System.out.println("Consonant found...");
        } catch (InputMismatchException e) {
            System.out.println("please enter as i said...");
        }

        sc.close();
    }
}
