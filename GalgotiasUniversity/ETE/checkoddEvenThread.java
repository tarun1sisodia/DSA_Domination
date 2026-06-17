class odd extends Thread
{
    public void run()
    {
        for(int i=1 ; i <= 10 ; i+=2){
            System.out.println(i);
        }
    }
}

class even extends Thread
{
    public void run()
    {
        for(int i = 0; i<= 10 ;i+=2){
            System.out.println(i);
        }
    }
}

class abc {
    public static void main(String[] args) {
        odd o1 = new odd();
        o1.start();
        even e1 = new even();
        e1.start();
    }
}