// 14. Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

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
            System.out.println("Wrong Input");
        }        
    }
}
