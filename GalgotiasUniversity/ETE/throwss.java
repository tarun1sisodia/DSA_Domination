import java.io.*;
class abc{
    static void readFile() throws IOException {
            FileReader fr = new FileReader("thread.java");
            int c;
            while((c = fr.read()) != -1){
                System.out.print((char)c);
            }
            System.out.println();
            fr.close();
        }
    public static void main(String[] args) {
        try{
            readFile();
            System.out.println("File Exists!");            
        }
        catch(IOException e){
            System.out.println("HANDLED in main function!");
            System.out.println(e);
        }
    }
}


class fileRead {
    public void readFile() throws IOException{
        FileReader fr = new FileReader("packa.java");
        int c;
        while((c == fr.readFile())==-1){
            System.out.println((char)c);
        }
        fr.close();
    }
    public static void main(String[] args) {
        try{
            readFile();
            System.out.println("File Exists!");
        }
        catch(IOException e){
            System.out.println("HANDLED in main function!");
            System.out.println(e);
        }   
    }
}