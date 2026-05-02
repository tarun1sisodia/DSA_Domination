import java.util.HashMap;

class Main {
    public static void main(String[] args) {
        
        int board[] = {10,11,13,14,22,11,44,55,66,99,12,11,20,10};

        HashMap<Integer, Integer> map = new HashMap<>();

        // Step 1: Count frequency
        for(int i = 0; i < board.length; i++) {
            int val = board[i];

            if(map.containsKey(val)) {
                map.put(val, map.get(val) + 1);
            } else {
                map.put(val, 1);
            }
        }

        // Step 2: Print only duplicates
        int totalDuplicateElements = 0;

        for(Integer key : map.keySet()) {
            if(map.get(key) > 1) {
                System.out.println(key + " repeated " + map.get(key) + " times");
                totalDuplicateElements++;
            }
        }

        System.out.println("Total different duplicate numbers = " + totalDuplicateElements);
    }
}