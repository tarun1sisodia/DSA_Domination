import java.util.Scanner;

public class areaOFTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the length of tirangle.");
        int lenght = sc.nextInt();
        System.out.println("Enter the breadth of tirangle.");
        int breadth = sc.nextInt();

        System.out.println("Area:" + (lenght * breadth));

        System.out.println("Perimeter:" + 2 * (lenght * breadth));

        sc.close();

    }
}
