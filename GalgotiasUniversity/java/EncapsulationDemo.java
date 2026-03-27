class Student {
    private String name;
    private int age;
    private double gpa;

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public double getGpa() {
        return gpa;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        } else {
            System.out.println("Error: Age must be positive!");
        }
    }

    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            System.out.println("Error: Invalid GPA!");
        }
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        Student s = new Student();

        s.setName("Tarun Sisodia");
        s.setAge(21);
        s.setGpa(3.8);

        System.out.println("----- Encapsulation (Access via Methods) -----");
        System.out.println("Student Name: " + s.getName());
        System.out.println("Student Age: " + s.getAge());
        System.out.println("Student GPA: " + s.getGpa());

        System.out.println("\nTesting invalid setter values:");
        s.setAge(-5);
        s.setGpa(105);
    }
}
