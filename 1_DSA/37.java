// 37. Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        //loop while number is greater than 0
        while(n > 0){
            //to get last digit
            int digit = n % 10;
            //print last digit
            System.out.println(digit);
            //remove last digit
            n /= 10;
        }                
    }
}
