import java.util.Scanner;

public class q21 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double unit = sc.nextInt();
        double amount = 0;
        /*
         * if (unit >= 0 && unit <= 100)
         * System.out.println(unit * 4.2);
         * else if (unit >= 101 && unit <= 200)
         * System.out.println((100 * 4.2) + (unit - 100) * 6);
         * else if (unit >= 201 && unit <= 400)
         * System.out.println((100 * 4.2) + (100 * 6) + (unit - 200) * 8);
         * else
         * System.out.println((100 * 4.2) + (100 * 6) + (100 * 8) + (unit - 400) * 13);
         */
        if (unit > 400) {
            amount = (unit - 400) * 13;
            unit = 400;
        }
        if (unit >= 200 && unit <= 400) {
            amount = amount + (unit - 200) * 8;
            unit = 200;
        }
        if (unit > 100 && unit <= 200) {
            amount = amount + (unit - 100) * 6;
            unit = 100;
        }
        amount = amount + (unit * 4.2);
        System.out.println(amount);
        sc.close();
    }

}
