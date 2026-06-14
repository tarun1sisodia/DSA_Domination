import java.util.Scanner;

public class q23 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the number to print the Hello World ");
        double n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.println("hello world!!");
        }
        sc.close();
    }
}
