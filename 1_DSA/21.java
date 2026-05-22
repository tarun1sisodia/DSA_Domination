// 21. Movie rating

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double rating = sc.nextDouble();
        if(rating >= 5){
            System.out.println("Excellent");
        }
        else if(rating >= 4){
            System.out.println("Very Good");
        }
        else if(rating >= 3){
            System.out.println("Good");
        }
        else if(rating >= 2){
            System.out.println("Average");
        }
        else{
            System.out.println("Poor");
        }        
    }
}
