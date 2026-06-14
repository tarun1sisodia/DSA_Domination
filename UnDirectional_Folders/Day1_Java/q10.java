import java.util.Scanner;

public class q10 {
    public static void main(String[] args) {
        System.out.println("Enter the radius of Sphere:");

        Scanner sc = new Scanner(System.in);
        double r = sc.nextDouble();

        System.out.println("Area:" + 4 * Math.PI * r * r);
        sc.close();
    }
}
