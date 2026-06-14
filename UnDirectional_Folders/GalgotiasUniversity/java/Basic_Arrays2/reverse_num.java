class reverseNum {
    public static void main(String[] args) {
        int n = 153;
        int org = n;
        int rev = 0;
        int sum =0;

        while( n > 0){
            int dgt = n % 10;
            rev = (rev * 10) + dgt;
            sum  += (dgt * dgt * dgt);
            n/=10;
        }
        if(sum == org) {
            System.out.println("Yes: it's a armstrong : "+sum);
        }
        else
        {
            System.out.println("Not: a armstrong : "+ sum );
        }
        if(org == rev) {
            System.out.println("Yes: it's a palindrome number: "+ rev);
        }
        
        
    }
}