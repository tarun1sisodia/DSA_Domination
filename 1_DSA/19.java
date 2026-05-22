// 19. Accept a year and check if it a leap year or not (google to find out what's a leap year)

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();
        if(year % 4 == 0){
            if(year % 100 == 0){
                if(year % 400 == 0){
                    System.out.println("Leap year");
                }
                else{
                    System.out.println("Not a leap year");
                }
            }
            else{
                System.out.println("Leap year");
            }
        }else   {
            System.out.println("Not a leap year");
        }        
    }
}
