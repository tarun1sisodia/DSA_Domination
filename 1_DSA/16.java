// 16. Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.next();
        int age = sc.nextInt();
        if(age >= 18){
            System.out.println("Hello " + name + ", You are a valid voter.");
        }else{
            System.out.println("Sorry " + name + ", you can't cast the vote.");
        }        
    }
}
