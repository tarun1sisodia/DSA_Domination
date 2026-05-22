// 6. Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;

        a = a+b;
        a = a-b;
        b = a-b;
        
        System.out.println(a+" "+b);

    }
}
  