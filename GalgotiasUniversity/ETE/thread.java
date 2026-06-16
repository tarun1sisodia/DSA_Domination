// A thread can be created by extending the Thread class and overriding the run() method.

// Calling the Thread Class..
//Thread class 
class MyThread extends Thread{
    //Creating a run with void type...
    public void run()
    {
        int n = 5;
        for(int i = 0; i < n; i++){
            System.out.println("Thread IS RUNNING...."+i);
        }
    }
    //to run the thread in same class just call it..
    /*
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();
        System.out.println("Thread Class Thread Executedd.");
    }
    */
}


//using Thread..
class ThreadDemo{
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();
        //First it will runnn..
        System.out.println("main Thread Executedd.");
    }
}