// 9. Accept the three sides of triangle and calculate the area using Heron's formula

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double a = 3;
        double b = 4;
        double c = 5;

        double s = (a + b + c) / 2;

        double area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

        System.out.println("Area of triangle = " + area);;
    }
}
