import java.util.Scanner;

public class incrementNdecrement {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the value");

        int a = sc.nextInt();

        int c = --a + ++a; //

        System.out.println(c);
        sc.close();
    }

}
