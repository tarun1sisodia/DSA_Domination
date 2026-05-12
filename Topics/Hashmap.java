
import java.util.HashMap;
 class Main
{
	public static void main(String[] args) {
	    // What is HashMap
	    // it is a structure to store data.
	    // in form of key and value 
	    
	    // Example of Hashamp
	    // Student Name -> Marks
	    // "Tarun" -> 98
	    
	    // Create a  HashMap
	    HashMap<String, Integer> map = new HashMap<>();
	    
	    // Input the key and value in map 
	    map.put("Galgotias",100);
	    map.put("Mohit",97);
	    map.put("Tarun",98);
	    
	    //Print the map.
	    System.out.println(map);
	}
}
