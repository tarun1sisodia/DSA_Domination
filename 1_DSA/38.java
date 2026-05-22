// 38. Sum of digits of a number (Ex: 936 = 18)

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0;
        //loop while number is greater than 0
        while(n > 0){
            //to get last digit
            int digit = n % 10;
            //add last digit to sum
            sum += digit;
            //remove last digit
            n /= 10;
        }                
        System.out.println("Sum of digits = " + sum);
    }
}
