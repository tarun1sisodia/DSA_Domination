import java.util.InputMismatchException;
import java.util.Scanner;

public class q17 {
    public static void main(String[] args) {
        System.out.println("Enter the day between 1 and 7 :");
        try {
            Scanner sc = new Scanner(System.in);
            int day = sc.nextInt();
            switch (day) {
                case 1:
                    System.out.println("Sunday");
                    break;
                case 2:
                    System.out.println("Monday");
                    break;
                case 3:
                    System.out.println("Tuesday");
                    break;
                case 4:
                    System.out.println("Wednesday");
                    break;
                case 5:
                    System.out.println("Thursday");
                    break;
                case 6:
                    System.out.println("Friday");
                    break;
                case 7:
                    System.out.println("Saturday");
                    break;

                default:
                    break;
            }
            sc.close();
        } catch (InputMismatchException e) {
            System.out.println("Enter the Correct Data in Next time.");
        }

    }
}
