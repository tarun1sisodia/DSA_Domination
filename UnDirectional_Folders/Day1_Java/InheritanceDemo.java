// InheritanceDemo.java
// This file demonstrates:
//   1. Inheritance  - Aadhar_ID (parent), PAN_ID & Voter_ID (child classes)
//   2. super keyword - access parent-class data from a child class
//   3. this  keyword - distinguish instance variables from local variables
//   4. Constructors  - both default (no-arg) and parameterized forms

// ─────────────────────────────────────────────────────────────────────────────
// PARENT CLASS : Aadhar_ID
// Acts as the base identity document; every other ID card is built on top of it.
// ─────────────────────────────────────────────────────────────────────────────
class Aadhar_ID {

    // Instance variables – stored per object in heap memory
    String name;       // holds the full name of the card holder
    int    age;        // holds the age of the card holder
    String address;    // holds the residential address
    String aadharNumber; // holds the 12-digit Aadhar number (unique per person)

    // ── DEFAULT CONSTRUCTOR ──────────────────────────────────────────────────
    // A default constructor takes no arguments.
    // Java calls it automatically when we write: new Aadhar_ID()
    // Here we assign placeholder values so the object is never left "empty".
    Aadhar_ID() {
        // 'this' keyword – refers to the current object's instance variables.
        // Without 'this', the compiler would see ambiguity between instance
        // variable and any local variable of the same name.
        this.name         = "Unknown";          // set default name
        this.age          = 0;                  // set default age
        this.address      = "Not Provided";     // set default address
        this.aadharNumber = "000000000000";     // set default aadhar number
        System.out.println("[Aadhar_ID] Default constructor called – object created with placeholder data.");
    }

    // ── PARAMETERIZED CONSTRUCTOR ────────────────────────────────────────────
    // Accepts four arguments so callers can supply real data at creation time.
    // Parameters shadow the instance variables, so 'this' is required to tell
    // them apart.
    Aadhar_ID(String name, int age, String address, String aadharNumber) {
        this.name         = name;         // 'this.name'  → instance variable
                                          //      'name'  → local parameter
        this.age          = age;          // same pattern for age
        this.address      = address;      // same pattern for address
        this.aadharNumber = aadharNumber; // same pattern for aadharNumber
        System.out.println("[Aadhar_ID] Parameterized constructor called – real data assigned.");
    }

    // Method to display Aadhar card information
    void displayAadharInfo() {
        System.out.println("──── Aadhar Card Details ────");
        System.out.println("Name          : " + this.name);   // 'this' clarifies we read the instance variable
        System.out.println("Age           : " + this.age);
        System.out.println("Address       : " + this.address);
        System.out.println("Aadhar Number : " + this.aadharNumber);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// CHILD CLASS 1 : PAN_ID
// 'extends Aadhar_ID' means PAN_ID inherits all fields and methods of Aadhar_ID.
// PAN also adds its own fields: panNumber, annualIncome, and a shadowing 'name'
// field that holds a different value than the parent's 'name' field.
// ─────────────────────────────────────────────────────────────────────────────
class PAN_ID extends Aadhar_ID {   // 'extends' establishes the IS-A relationship

    // PAN-specific instance variables (not present in the parent class)
    String name;        // shadows (hides) the parent's 'name' field – child-specific copy
    String panNumber;   // 10-character alphanumeric PAN number
    double annualIncome; // income declared on the PAN card

    // ── DEFAULT CONSTRUCTOR ──────────────────────────────────────────────────
    // 'super()' on the first line calls the parent's default constructor so
    // that inherited fields (age, address, aadharNumber) get initialised
    // before we handle the child-specific fields.
    PAN_ID() {
        super(); // calls Aadhar_ID() – parent must be initialised first
        this.name         = "PAN Holder (default)";  // child's own 'name' field – different from parent's
        this.panNumber    = "XXXXXXXXXX";             // default PAN placeholder
        this.annualIncome = 0.0;                      // default income
        System.out.println("[PAN_ID] Default constructor called.");
    }

    // ── PARAMETERIZED CONSTRUCTOR ────────────────────────────────────────────
    // 'super(parentName, age, address, aadharNumber)' forwards the common fields
    // to the parent's parameterized constructor – avoids duplicating that logic.
    // The child's own 'name' field stores a formatted version for demonstration.
    PAN_ID(String parentName, int age, String address, String aadharNumber,
           String panNumber, double annualIncome) {
        super(parentName, age, address, aadharNumber); // initialise parent's name and other inherited fields
        this.name         = "PAN Holder: " + parentName; // child's own 'name' is different from parent's
        this.panNumber    = panNumber;    // initialise PAN-specific field
        this.annualIncome = annualIncome; // initialise PAN-specific field
        System.out.println("[PAN_ID] Parameterized constructor called.");
    }

    // Method to display PAN card information (uses 'super' to print parent data)
    void displayPANInfo() {
        // 'super.displayAadharInfo()' calls the parent class method to print
        // the inherited fields – we reuse parent logic instead of rewriting it.
        System.out.println("──── PAN Card Details ────");
        super.displayAadharInfo();  // super keyword: invoke parent-class method
        System.out.println("PAN Name      : " + this.name);         // child's own name field
        System.out.println("PAN Number    : " + this.panNumber);    // own field
        System.out.println("Annual Income : " + this.annualIncome); // own field
    }

    // Demonstrates 'super' field access:
    // PAN_ID declares its own 'name' field that hides the parent's 'name'.
    // 'this.name' → child's field; 'super.name' → parent's original field.
    void demonstrateSuper() {
        System.out.println("\n── super keyword demo (PAN_ID) ──");
        System.out.println("'this.name'  (PAN_ID child field) : " + this.name);  // child's shadowing field
        System.out.println("'super.name' (Aadhar_ID parent)   : " + super.name); // parent's original field
        // Key takeaway: child and parent hold DIFFERENT name values; 'super' is the
        // only way to access the parent's copy once the child has declared the same field.
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// CHILD CLASS 2 : Voter_ID
// Similarly extends Aadhar_ID and adds Voter-specific fields, including a
// shadowing 'name' field with different data than the parent's 'name'.
// ─────────────────────────────────────────────────────────────────────────────
class Voter_ID extends Aadhar_ID {  // 'extends' establishes inheritance

    // Voter-specific instance variables
    String name;           // shadows the parent's 'name' field – child-specific copy
    String voterIdNumber;  // unique voter identification number
    String constituency;   // the electoral constituency the voter belongs to

    // ── DEFAULT CONSTRUCTOR ──────────────────────────────────────────────────
    Voter_ID() {
        super();  // must call parent constructor first to initialise inherited fields
        this.name          = "Voter (default)";   // child's own 'name' field
        this.voterIdNumber = "VOTER000000";        // default placeholder
        this.constituency  = "Not Assigned";       // default constituency
        System.out.println("[Voter_ID] Default constructor called.");
    }

    // ── PARAMETERIZED CONSTRUCTOR ────────────────────────────────────────────
    Voter_ID(String parentName, int age, String address, String aadharNumber,
             String voterIdNumber, String constituency) {
        super(parentName, age, address, aadharNumber); // delegate common fields to parent
        this.name          = "Voter: " + parentName;  // child's own 'name' is different from parent's
        this.voterIdNumber = voterIdNumber; // set Voter-specific field
        this.constituency  = constituency;  // set Voter-specific field
        System.out.println("[Voter_ID] Parameterized constructor called.");
    }

    // Method to display Voter ID information (uses 'super' to print parent data)
    void displayVoterInfo() {
        System.out.println("──── Voter ID Details ────");
        super.displayAadharInfo();  // reuse parent method via super keyword
        System.out.println("Voter Name    : " + this.name);          // child's own name field
        System.out.println("Voter ID No.  : " + this.voterIdNumber); // own field
        System.out.println("Constituency  : " + this.constituency);  // own field
    }

    // Demonstrates 'super' when child's own 'name' field hides the parent's 'name'.
    // 'this.name'  → Voter_ID's own field (child-specific value)
    // 'super.name' → Aadhar_ID's field   (parent's original value)
    void demonstrateSuper() {
        System.out.println("\n── super keyword demo (Voter_ID) ──");
        System.out.println("'this.name'  (Voter_ID child field) : " + this.name);  // child's field
        System.out.println("'super.name' (Aadhar_ID parent)     : " + super.name); // parent's field
        // Key takeaway: child and parent hold DIFFERENT name values; only 'super.name'
        // reaches the parent's version once the child declares the same field name.
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// DRIVER CLASS : InheritanceDemo
// Contains the main() entry point and exercises all four concepts.
// ─────────────────────────────────────────────────────────────────────────────
public class InheritanceDemo {

    public static void main(String[] args) {

        System.out.println("============================================================");
        System.out.println("  DEMO 1 : Default Constructors");
        System.out.println("============================================================");

        // Creating objects using default constructors – no arguments needed.
        Aadhar_ID aadhar1 = new Aadhar_ID();  // calls Aadhar_ID()  → placeholder data
        PAN_ID    pan1    = new PAN_ID();      // calls PAN_ID()     → also calls Aadhar_ID() internally
        Voter_ID  voter1  = new Voter_ID();    // calls Voter_ID()   → also calls Aadhar_ID() internally

        aadhar1.displayAadharInfo(); // print placeholder Aadhar data
        System.out.println();
        pan1.displayPANInfo();       // print placeholder PAN data (includes parent Aadhar data)
        System.out.println();
        voter1.displayVoterInfo();   // print placeholder Voter data (includes parent Aadhar data)

        System.out.println("\n============================================================");
        System.out.println("  DEMO 2 : Parameterized Constructors + Inheritance");
        System.out.println("============================================================");

        // Creating objects with real data using parameterized constructors.
        // Both PAN_ID and Voter_ID reuse Aadhar_ID's basic information.
        PAN_ID pan2 = new PAN_ID(
            "Rahul Sharma",              // name  – common field inherited from Aadhar_ID
            30,                          // age   – common field
            "12, MG Road, Delhi",        // address – common field
            "123456789012",              // aadharNumber – common field
            "ABCDE1234F",                // panNumber – PAN-specific field
            750000.00                    // annualIncome – PAN-specific field
        );

        Voter_ID voter2 = new Voter_ID(
            "Rahul Sharma",              // same person's name (common field)
            30,                          // same person's age
            "12, MG Road, Delhi",        // same address
            "123456789012",              // same aadharNumber
            "DL/01/123/456789",          // voterIdNumber – Voter-specific field
            "New Delhi Constituency"     // constituency – Voter-specific field
        );

        System.out.println();
        pan2.displayPANInfo();    // shows both inherited + own fields
        System.out.println();
        voter2.displayVoterInfo(); // shows both inherited + own fields

        System.out.println("\n============================================================");
        System.out.println("  DEMO 3 : 'super' Keyword");
        System.out.println("  (child class method accesses parent class field via super)");
        System.out.println("============================================================");

        // Even though the local variable and the instance variable share the name 'name',
        // 'super.name' always resolves to the parent-class copy of the field.
        pan2.demonstrateSuper();   // shows super usage inside PAN_ID
        voter2.demonstrateSuper(); // shows super usage inside Voter_ID

        System.out.println("\n============================================================");
        System.out.println("  DEMO 4 : 'this' Keyword");
        System.out.println("  (instance variable vs local variable with same name)");
        System.out.println("============================================================");

        // Create a fresh Aadhar object with parameterized constructor.
        // Inside the constructor, 'this.name = name' uses 'this' to differentiate
        // between the instance variable (this.name) and the parameter (name).
        Aadhar_ID aadhar2 = new Aadhar_ID(
            "Priya Singh",           // name parameter – local to constructor
            25,
            "45, Park Street, Mumbai",
            "987654321098"
        );

        // Display shows the instance variable was correctly set by 'this'
        System.out.println("\nAadhar object created using parameterized constructor (this demo):");
        aadhar2.displayAadharInfo();

        System.out.println("\n============================================================");
        System.out.println("  All concepts demonstrated successfully!");
        System.out.println("============================================================");
    }
}
