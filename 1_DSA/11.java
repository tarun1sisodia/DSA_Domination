// 11. Find circumference and area of circle

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double radius = 5;
        double circumference = 2 * Math.PI * radius;
        double area = Math.PI * radius * radius;
        System.out.println("Circumference of circle = " + circumference);
        System.out.println("Area of circle = " + area);
    }
}
