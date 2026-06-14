package Coding_Questions;

import java.util.InputMismatchException;
import java.util.Scanner;

public class greetUser {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // System.out.println("Enter your Name");

        // System.out.println("Enter your Age:");

        try {

            String name = sc.nextLine();
            int age = sc.nextInt();

            if (name.length() >= 1 && age >= 0 && age <= 120) {

                System.out.println("Hello " + name + " you are " + age + " years old");
            }

        } catch (InputMismatchException e) {
            System.out.println("Please Enter Correct Data.");
        }

        sc.close();
    }
}
