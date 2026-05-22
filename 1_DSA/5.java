// 5. Swap two numbers using third variable

import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        System.out.print("Enter second number: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int temp = a;
        a = b;
        b = temp;
        System.out.println("After swapping:");
        System.out.println("a = " + a);
        System.out.println("b = " + b);
	}
}
