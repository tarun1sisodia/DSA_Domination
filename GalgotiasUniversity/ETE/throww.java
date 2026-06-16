class abc{
    public static void main(String[] args) {
        int age = 17;
        try{
            if(age < 18){
                // create and throw a exception explicitly..... // wihtout going to catch it (handled by the developer)
                throw new ArithmeticException("Not Valid to VOTEE..");
            }
            else{
                System.out.println("You are eligible for VOTEE..");
            }
        }
        catch(ArithmeticException e){
            System.out.println(e);
        }   
    }   
}