import java.util.Scanner;

public class greetingOnGender {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your Name");
        String name = sc.nextLine();

        System.out.println("Enter your Gender in M or F:");

        char gender = sc.nextLine().charAt(0);

        if (gender == 'M' || gender == 'm') {
            System.out.println("Good Morning Sir " + name);
        } else if (gender == 'F' || gender == 'f') {
            System.out.println("Good Morning Mam " + name);

        } else {
            System.out.println("Invalid Input");
        }
        sc.close();
    }
}
