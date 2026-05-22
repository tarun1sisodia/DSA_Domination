// 35. Check if the number is Prime or not.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        //handling 0 and 1 inputs
        if (n <= 1) {
            System.out.println("Not a prime");
            return;
        }
        //flag for prime
        boolean isPrime = true;
        //sqrt optimization will run upto half of the number because of sqrt
        //the pair of factors will be less than or equal to sqrt(n)
        //so we only need to check upto sqrt(n)
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            System.out.println("Prime");
        }else{
            System.out.println("Not a prime");
        }        
    }
}
