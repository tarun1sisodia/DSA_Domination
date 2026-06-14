package HomeWork;

import java.util.InputMismatchException;
import java.util.Scanner;

public class movie_rating {
    public static void main(String[] args) {

        System.out.println("Enter Movie Rating:");
        System.out.println("Enter Movie Name:");

        Scanner sc = new Scanner(System.in);
        try {

            double movieRating = sc.nextDouble();
            sc.nextLine();
            String movieName = sc.nextLine();

            if (movieRating >= 0 && movieRating <= 2.0)
                System.out.println(movieName + " is a Flop");
            else if (movieRating >= 2.1 && movieRating <= 3.4)
                System.out.println(movieName + " is a Semi-Hit");
            else if (movieRating >= 3.5 && movieRating <= 4.5)
                System.out.println(movieName + " is a Hit");
            else if (movieRating >= 4.6 && movieRating <= 5.0)
                System.out.println(movieName + " is a Super-Hit");
        } catch (InputMismatchException e) {
            System.out.println("Either your rating is incorrect.. or your Data is incorrect.");
        }
        sc.close();
    }
}
