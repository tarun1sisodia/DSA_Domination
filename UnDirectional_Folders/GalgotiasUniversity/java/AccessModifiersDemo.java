class AccessModifierTester {
    private int privateVar = 10;
    int defaultVar = 20;
    protected int protectedVar = 30;
    public int publicVar = 40;

    public void displayInformation() {
        System.out.println("----- Access Modifiers (Same Class Level) -----");
        System.out.println("Private Variable: " + privateVar);
        System.out.println("Default Variable: " + defaultVar);
        System.out.println("Protected Variable: " + protectedVar);
        System.out.println("Public Variable: " + publicVar);
    }
}

public class AccessModifiersDemo {
    public static void main(String[] args) {
        AccessModifierTester obj = new AccessModifierTester();

        System.out.println("----- Access Modifiers (Same Package Level) -----");
        
        System.out.println("Default: " + obj.defaultVar);     
        System.out.println("Protected: " + obj.protectedVar); 
        System.out.println("Public: " + obj.publicVar);       

        obj.displayInformation();
        
        System.out.println("\nNote: 'private' is only accessible inside the class.");
        System.out.println("'default' and 'protected' are accessible in the same package.");
        System.out.println("'protected' is also accessible in subclasses from different packages.");
        System.out.println("'public' is accessible globally.");
    }
}
