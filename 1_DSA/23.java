// 23. Bijli Bill

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int units = sc.nextInt();
        double bill = 0;
        if(units <= 50){
            bill = (double) units * 2;
        }
        else if(units <= 100){
            bill = 50 * 2 + (units - 50) * 3;
        }
        else if(units <= 150){
            bill = 50 * 2 + 50 * 3 + (units - 100) * 5;
        }
        else{
            bill = 50 * 2 + 50 * 3 + 50 * 5 + (units - 150) * 10;
        }
        System.out.println("Bill: " + bill);
    }
}
