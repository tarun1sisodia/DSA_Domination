
public class Main
{
	public static void main(String[] args) {
      String str = "Tarun";
        
        String rev = "";
        
        for(int i = str.length()-1 ;i>=0;i--){
            rev += str.charAt(i); //each iteration is creating a new string in memory....
        }
        System.out.println(rev);
      /*
      char[] arr = str.toCharArray();
      int  n = arr.length;
      int start = 0;
      int end = n-1;
        while(start < end){
        char temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
        }
        return new String(arr);        
      */
     
	}
	
}
