import java.util.Scanner;

public class q6 {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        // Eq.1
        a = a + b;
        // Eq.2
        b = a - b;
        // Eq.3
        a = a - b;
        System.out.println("A:" + a);
        System.out.println("B:" + b);

    }
}

class swap2 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter A and B values.");

        int a = sc.nextInt();
        int b = sc.nextInt();
        // Eq.1
        a = a + b;
        // Eq.2
        b = a - b;
        // Eq.3
        a = a - b;
        System.out.println("A:" + a);
        System.out.println("B:" + b);
        sc.close();

    }
}
