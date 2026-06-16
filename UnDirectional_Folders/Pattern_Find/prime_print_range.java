class Main{
    public static void main(String[] args) {
        int n = 10;
        if( n <= 1) return;

        for(int i = 2; i <= n ;i++){
            if(isPrime(i)) {
                System.out.println(i);
            }
        }

    }
    static boolean isPrime(int num){
       if(num <= 1)
         return false;

        if(num == 2)
         return true;

        if(num % 2 == 0)
            return false;
        for(int i = 3; i*i<=num; i+=2){ //to reduce the iteration and method overhead... w/o using the sqrt functions.. and also everytime directly jump to odd numers...
            if(num % i == 0) return false;
        }
        return true;
    }
}