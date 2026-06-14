import java.util.Scanner;

public class q9 {
    public static void main(String[] args) {
        System.out.println("Enter the A, B, C Respectively:");

        Scanner sc = new Scanner(System.in);

        double a = sc.nextInt();
        double b = sc.nextInt();
        double c = sc.nextInt();

        System.out.println("Finding the S:...");
        double s = (a + b + c) / 2;
        double heron = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        System.out.println(heron);
        sc.close();
    }
}
