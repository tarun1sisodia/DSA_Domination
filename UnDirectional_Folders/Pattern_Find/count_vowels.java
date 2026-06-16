class Main{
    public static void main(String[] args) {
        String name = "Tarun".toLowerCase();
        int count = 0;
        int n  = name.length();
        for(int i = 0 ; i < n ;i++){
            char ch = name.charAt(i);
            if(ch == 'a'||ch == 'e'||ch=='i'||ch=='o'||ch=='u') count++;
        }
        System.out.println("Count:::"+count);
    }   
}