import java.util.Scanner;

public class greatroOftwo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        if (a > b) {
            System.out.println("A is Greator:" + a);
        } else if (b > a) {
            System.out.println("B is Greator:" + b);

        }
        sc.close();
    }
}
