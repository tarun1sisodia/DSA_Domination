import java.util.Scanner;

public class q19 {
    public static void main(String[] args) {
        System.out.println("Check Leap Year or not..");
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();

        /*
         * if (year % 4 == 0) {
         * System.out.println("Yeah It's A leap year: " + year);
         * if (year % 100 == 0) {
         * // System.out.println("Yeah It's A leap year: " + year);
         * if (year % 400 == 0) {
         * System.out.println("Yeah It's A leap year: " + year);
         * } else {
         * System.out.println("Not it's not A leap year: " + year);
         * }
         * } else {
         * System.out.println("Not it's not A leap year: " + year);
         * }
         * 
         * } else {
         * System.out.println("Not it's not A leap year: " + year);
         * }
         */

        if (year % 400 == 0)
            System.out.println("Leap year:");
        else if (year % 4 == 0 && year % 100 != 0)
            System.out.println("Leap year");
        else
            System.out.println("Not a Leap year");
                    sc.close();

    }
}
