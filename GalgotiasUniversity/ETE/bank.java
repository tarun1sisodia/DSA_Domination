// interface for banking application...//
interface Bank{
    void deposit(double amount);
    void withdraw(double amount) throws InvalidTranscation;
    void display();
}
//custom exception..
class InvalidTranscation extends Exception{
    InvalidTranscation(String msg){
        super(msg);
    }
}

class BankAccount implements Bank{
    private double balance = 5000;
    public void deposit(double amount){
        balance +=amount;
        System.out.println("Amount deposited successfully!");
    }

    public double display(double balance){
        System.out.println("balance:"+balance);
    }
    public double withdraw(double amount) throws InvalidTranscation{
        if(amount > balance){
            throw new InvalidTranscation("Not allowed");
        }
        else{
            balance -=amount;
            System.out.println("Amount Withdrawn successfully!");
            return balance;
        }
    }
}

class banking{
    public static void main(String[] args) {
        try {
            //main object and class ..
            BankAccount b1 = new BankAccount();
            //all three function of itt..
            b1.deposit(1000);
            b1.withdraw(2000);
            b1.display(balance);
        } catch (Exception e) {
            System.out.println(e);
        }   
    }
}