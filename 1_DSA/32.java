// 32. Print the sum of all even & odd numbers in a range separately.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int evenSum = 0;
        int oddSum = 0;
        for(int i = 1; i <= n; i++){
            if(i % 2 == 0){
                evenSum += i;
            }
            else{
                oddSum += i;
            }
        }        
        System.out.println("Even sum = " + evenSum);
        System.out.println("Odd sum = " + oddSum);                
    }
}
