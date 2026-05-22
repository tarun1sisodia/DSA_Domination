// 42. Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int square = n * n;
        int temp = n;
        int count = 0;
        while(temp > 0){
            temp /= 10;
            count++;
        }
        int divisor = (int)Math.pow(10, count);
        if(square % divisor == n){
            System.out.println("Automorphic number");
        }else{
            System.out.println("Not a automorphic number");
        }                
    }
}
