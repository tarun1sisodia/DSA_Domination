// 13. Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char gender = sc.next().charAt(0).toLowerCase();
        if(gender == 'm'){
            System.out.println("Good Morning Sir");
        }else if(gender == 'f'){
            System.out.println("Good Morning Ma'am");
        }else{
            System.out.println("Invalid gender");
        }        
    }
}
