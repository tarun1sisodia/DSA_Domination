// 40. Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int rev = 0;
        int temp = n;
        while(n > 0){
            int dgt = n % 10;
            rev = rev * 10 + dgt;
            n /= 10;
        }
        if(temp == rev){
            System.out.println("Palindrome");
        }else{
            System.out.println("Not a Palindrome");
        }                
    }
}
