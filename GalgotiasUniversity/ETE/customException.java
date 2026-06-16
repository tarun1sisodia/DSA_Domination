class single extends Exception{
    single(String her){
        super(her);
    }
}

class tarun {
    static void checkRelationship(int num) throws single{
        try{
            if(num == 1) throw new single("Fuck You Bitch...");
            else
                System.out.println("We are in relationship...");
        }
        catch(single s){
            System.out.println(s);
        }     
    }

    //
    public static void main(String[] args) {
        try {
            checkRelationship(1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}