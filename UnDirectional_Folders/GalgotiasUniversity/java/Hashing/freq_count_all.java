import java.util.HashMap;
    class Main
    {
        public static void main(String[] args) {
            // Count the frequency of all the elements in the array.
            HashMap<Integer, Integer> map = new HashMap<>();
            int[] arr = {1,2,3,4,5,1,2,3,4,5};
            for(int i=0; i<arr.length; i++){
                if(map.containsKey(arr[i])){
                    map.put(arr[i], map.get(arr[i])+1);
                }else{
                    map.put(arr[i], 1);
                }
            }
            System.out.println(map);
        }
    }