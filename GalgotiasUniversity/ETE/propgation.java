class abc{
    void fun1(){
        fun2();
    }

    void fun2()
    {   
        fun3();
    }
    void fun3()
    {
        int x = 10 / 0;
        System.out.println(x);
    }
    public static void main(String[] args) {
        //creating obj inside the try to handle the unexpected expectionsss...
        try{
            abc obj = new abc();
            obj.fun1();
        }
        catch(ArithmeticException e){
            System.out.println("Handled in main function!");
            System.out.println(e);
        }
    }
}