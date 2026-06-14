
import java.util.*;
public class n 
{
    public static boolean areArraysEqual(int[] a, int[] b) {
        // Step 1: Check length
        if (a.length != b.length) {
            return false; // Agar size alag hai to equal nahi ho sakte
        }

        // Step 2: Create frequency map for array a[]
        HashMap<Integer, Integer> freq = new HashMap<>();
        for (int num : a) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        // Step 3: Decrease frequency for elements in array b[]
        for (int num : b) {
            if (!freq.containsKey(num)) {
                return false; // Agar element a[] me nahi hai
            }
            freq.put(num, freq.get(num) - 1);

            // Agar frequency zero ho gayi to remove kar do
            if (freq.get(num) == 0) {
                freq.remove(num);
            }
        }

        // Step 4: Agar map empty hai to equal hai
        return freq.isEmpty();
    }

    public static void main(String[] args) {
        int[] a = {1, 2, 2, 3};
        int[] b = {2, 1, 3, 2};

        if (areArraysEqual(a, b)) {
            System.out.println("Arrays are Equal ✅");
        } else {
            System.out.println("Arrays are NOT Equal ❌");
        }
    }
}

    
       

