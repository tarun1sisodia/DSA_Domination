class Bank {
    public double getInterest() {
        return 0.0;
    }
}

class SBI extends Bank {
    @Override
    public double getInterest() {
        return 5.10;
    }
}

class HDFC extends Bank {
    @Override
    public double getInterest() {
        return 7.00;
    }
}

class ICICI extends Bank {
    @Override
    public double getInterest() {
        return 6.50;
    }
}

public class BankOverriding {
    public static void main(String[] args) {
        Bank obj; 

        System.out.println("----- Bank Interest Rate (Method Overriding) -----");
        
        obj = new SBI();
        System.out.println("Interest Rate SBI: " + obj.getInterest() + "%");

        obj = new HDFC();
        System.out.println("Interest Rate HDFC: " + obj.getInterest() + "%");

        obj = new ICICI();
        System.out.println("Interest Rate ICICI: " + obj.getInterest() + "%");
    }
}
