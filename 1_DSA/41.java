// 41. Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int temp = n;
        int sum = 0;
        while(n > 0){
            int digit = n % 10;

            //factorial of digit
            int fact = 1;
            for(int i = 1; i <= digit; i++){
                fact *= i;
            }

            //add factorial of digit to sum
            sum += fact;
            
            //remove last digit
            n /= 10;
        }
        
        if(temp == sum){
            System.out.println("Strong number");
        }else{
            System.out.println("Not a strong number");
        }                
    }
}
