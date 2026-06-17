//Polymorphism means -- 1 interface and many forms of it... i mean it can defined in many ways..

//Compile Time Polymorphism.                            //Runtime--polymorphism 
    // Overloading...                                       // overridding.
    //Static Binding occurs at compiletime                  // Dynamic Binding oCcurs at run time.
    //Faster Execution                                      // Slower Execution.
    //Same Class ***                                        // Diff Class.
    //Static Binding                                        //Dynamic binding

class function{
        void add(int a, int b){System.out.println(a+b);}
        void add(int a, int b, int c){System.out.println(a+b+c);}
}
class abc extends function{
    public static void main(String[] args) {
        function fnc = new function();
        fnc.add(2,2);
        fnc.add(10,20,20);
    }
}

class Animal{
    void sound()
    {
        System.out.println("Animal Sound");
    }
}

class Dog extends Animal{
    void sound()
    {
        System.out.println("Bark..");
    }
    public static void main(String[] args) {
        Dog run = new Dog();
        run.sound();
    }
}

