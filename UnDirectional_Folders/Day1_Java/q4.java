import java.util.Scanner;

public class q4 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your Name, Age");

        int age = sc.nextInt();
        sc.nextLine(); // Solving an run time issue.  by consuming the \n.
        String name = sc.nextLine();

        System.out.println("Hey," + name + "," + " You are at " + age);
        sc.close();
    }
}
