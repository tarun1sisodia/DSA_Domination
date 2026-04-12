import java.util.Scanner;
//To Count the Even and odd within a Range.
public class Count_EvenOdds_In_Range {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int even =0,odd =0;
        int start = sc.nextInt();
        int end = sc.nextInt();
        sc.close();
        for(int i = start; i <=end;i++)
        {
            if(i % 2 ==0) even++;
            else odd++;           
        }
        System.out.println("Total Evens found: "+ even);
        System.out.println("Total Odds found: "+ odd);
    }

    static void shortCut(start,end){
        int total = end - start+1;
        even = (end/2)-((start-1)/2);
        odd = total - even;
    }
}
