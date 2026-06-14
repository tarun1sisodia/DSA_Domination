class MaxMin {
    // Helper method to update the top 2 maximums
    // max[0] is the largest, max[1] is the second largest
    static void updateMax(int[] max, int val) {
        if (val > max[0]) {
            max[1] = max[0];
            max[0] = val;
        } else if (val > max[1] && val != max[0]) {
            max[1] = val;
        }
    }

    // Helper method to update the top 2 minimums
    // min[0] is the smallest, min[1] is the second smallest
    static void updateMin(int[] min, int val) {
        if (val < min[0]) {
            min[1] = min[0];
            min[0] = val;
        } else if (val < min[1] && val != min[0]) {
            min[1] = val;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1,5,7,7};

        // Arrays to store [1st, 2nd] elements
        int[] maxEven = {Integer.MIN_VALUE, Integer.MIN_VALUE};
        int[] minEven = {Integer.MAX_VALUE, Integer.MAX_VALUE};
        
        int[] maxOdd = {Integer.MIN_VALUE, Integer.MIN_VALUE};
        int[] minOdd = {Integer.MAX_VALUE, Integer.MAX_VALUE};

        for (int val : arr) {
            if ((val & 1) == 0) { // even
                updateMax(maxEven, val);
                updateMin(minEven, val);
            } else { // odd
                updateMax(maxOdd, val);
                updateMin(minOdd, val);
            }
        }
        
        System.out.println("MaxEven = " + maxEven[0] + " MaxEven2 = " + maxEven[1]);
        System.out.println("MaxOdd = " + maxOdd[0] + " MaxOdd2 = " + maxOdd[1]);
        System.out.println("MinEven = " + minEven[0] + " MinEven2 = " + minEven[1]);
        System.out.println("MinOdd = " + minOdd[0] + " MinOdd2 = " + minOdd[1]); 
    }
}