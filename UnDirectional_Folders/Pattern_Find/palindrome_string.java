class Main{
    public static void main(String[] args) {
        String nam = "Tarun";
        int n = nam.length();
        boolean palindrome = true;
        for(int i = 0 ; i <= n/2 ; i++){
            if(nam.charAt(i) != nam.charAt(n-i-1))
                {
                    palindrome = false;
                    break;
                }
        }
    if(palindrome) System.out.println("Palindrome::");
    else
        System.out.println("Not Palindrome:::");
    }   
}