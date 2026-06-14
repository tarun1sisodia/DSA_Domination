import java.util.Scanner;

public class cirumferenceOfCircle {

    public static void main(String[] args) {
        System.out.println("Enter the Radius of circle");
        Scanner sc = new Scanner(System.in);
        int r = sc.nextInt();

        System.out.println(Math.PI * Math.pow(r, 2));
        sc.close();
    }
}