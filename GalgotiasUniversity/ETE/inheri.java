//  Multilevel inheritenace.
class vowel{
    vowel(){System.out.println("A\tE\tI\tO\tU");}
}

class consonants extends vowel{
    consonants(){
        System.out.println("B to Z");
    }
    public static void main(String[] args) {
        vowel v = new vowel();
        consonants c = new consonants();
    }
}

class finalletters extends consonants{
    public static void main(String[] args) {
        finalletters fl = new finalletters();
    }
}

//Single inheritance
class abc{

}

class def extends abc{

}


//Multiple inheritance.

class dad {
    dad(){
        System.out.println("Job");
        }
}

class mom extends dad{
    mom()
    {
        System.out.println("Housewife");
    }
}

class son extends mom{
    public static void main(String[] args) {
        son habbits = new son();
    }
}