// 22. Profile based program

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your profile:");
        System.out.println("a - Student");
        System.out.println("b - Professional");
        System.out.println("c - Retired");
        char choice = sc.next().charAt(0).toLowerCase();
        if(choice == 'a'){
            System.out.println("You are a student");
        }
        else if(choice == 'b'){
            System.out.println("You are a professional");
        }
        else if(choice == 'c'){
            System.out.println("You are a retired person");
        }
        else{
            System.out.println("Invalid choice");
        }        
    }
}
