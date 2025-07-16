import java.util.Scanner;

public class q10 {
    public static void main(String[] args) {
        System.out.println("Enter the radius of Sphere:");

        Scanner sc = new Scanner(System.in);
        double PI = 3.14;
        int r = sc.nextInt();

        System.out.println("Area:" + 4 * PI * r * r);
        sc.close();
    }
}
