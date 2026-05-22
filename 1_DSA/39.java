// 39. Accept a number and print its reverse

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int rev= 0;
        while(n > 0){
            int dgt = n % 10;
            rev= rev * 10 + dgt;
            n /= 10;
        }
        System.out.println("Reversed number = " + rev);
    }
}
