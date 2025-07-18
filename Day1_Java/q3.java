import java.util.InputMismatchException;
import java.util.Scanner;

class sumOfTwo {
    public static void main(String[] args) {
        int a = 10;
        int b = 10;
        System.out.println(a + b);

    }
}

class printSumOfTwo {
    public static void main(String[] args) {

        int a = 10;
        int b = 10;
        
        System.out.println("Sum of Two: " + (a + b));
    }
}

class SumOfTwoInput {
    public static void main(String[] args) {

        System.out.println("Enter your Numbers:\n");

        Scanner sc = new Scanner(System.in);
        try {

            int a = sc.nextInt();
            int b = sc.nextInt();

            System.out.println("Sum of two:" + (a + b));

        } catch (InputMismatchException e) {
            System.out.println("Please Enter the Integer\t:=>" + e);
        }

        sc.close();
    }
}
