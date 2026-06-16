class Main{
    public static void main(String[] args) {
        int n = 1212;
        int rev = 0;
        int count = 0;
        int org = n;
        while(n > 0 ){
            int dgt = n% 10;
             rev = rev * 10 + dgt ;
             n /= 10;
        }
        System.out.println("Count::"+count);
        System.out.println("Rev..."+ rev);
        if(org == rev) System.out.println("Palindrome::");
        else {
            System.out.println("Not Palindrome....");
        }
    }   
}