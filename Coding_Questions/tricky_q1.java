package Coding_Questions;

public class tricky_q1 {
    public static void main(String[] args) {
        int x = 11, y = 22;
        if (++x == 11 && ++y == 23) {
            System.out.println(x + " " + y);
        } else if (x++ == 12 && y-- == 23) {
            System.out.println(x + " " + y);
        } else {
            System.out.println(x + " " + y);
        }
    }
}
