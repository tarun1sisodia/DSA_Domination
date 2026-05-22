// 25. Counting number of days in a given month of a year

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int month = sc.nextInt();
        int year = sc.nextInt();
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
            System.out.println("31 days");
        }
        else if(month == 4 || month == 6 || month == 9 || month == 11){
            System.out.println("30 days");
        }
        else{
            if(year % 4 == 0){
                if(year % 100 == 0){
                    if(year % 400 == 0){
                        System.out.println("29 days");
                    }
                    else{
                        System.out.println("28 days");
                    }
                }
                else{
                    System.out.println("29 days");
                }
            }else{
                System.out.println("28 days");
            }            
        }                
    }
}
