// 44. Harshad number

import java.util.Scanner;

class mains {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int temp = n;
        int sum = 0;
        while(temp > 0){
            int dgt = temp % 10;
            sum += dgt;
            temp /= 10;
        }
        if(n % sum == 0) {
            System.out.println("Automorphic");
        }
        else{
            System.out.println("not");
        }

    }
}
