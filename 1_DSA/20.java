// 20. Shop discount

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int totalExpense = sc.nextInt();
        double discount = 0;
        if(totalExpense >= 1000){
            discount = totalExpense * 0.1;
        }
        else if(totalExpense >= 500){
            discount = totalExpense * 0.05;
        }
        else{
            discount = totalExpense * 0.02;
        }
        double finalAmount = totalExpense - discount;
        System.out.println("Discount: " + discount);
        System.out.println("Final Amount: " + finalAmount);
    }
}
