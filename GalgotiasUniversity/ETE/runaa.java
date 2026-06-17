class MyRunnable implements Runnable {
 public void run() {
     for(int i=1;i<=5;i++) {
        System.out.println("Runnable Thread : " + i);
     }
    }
} 
//runnable helps to acheive the multiple inheritance using interfacess
public class abc {
 public static void main(String args[]) {
 abc a = new abc();
 //Created thread is NEW State
 Thread t1 = new Thread(a);
 t1.start();
 System.out.println("Main Thread Executed");
 }
 }