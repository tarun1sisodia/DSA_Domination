import java.util.*;

class Main {

    public static void main(String[] args) {

        int nums1[] = {1, 2, 3};
        int nums2[] = {2, 3, 4};

        Set<Integer> set = new LinkedHashSet<>();

        // add nums1
        for (int i : nums1) {

            set.add(i);
        }

        // add nums2
        for (int i : nums2) {

            set.add(i);
        }
        // ab size le rahe taki future m use krne m easy ho..
        int size = set.size();
    // new array design kri kyunki hume new array union
        int union[] = new int[size];
    // ye basic modification logic h , imp bhi h yad rakhna h..
        int index = 0;

        for (int val : set) {

            union[index] = val;
        // taki pata rahe which next element we have to update.
            index++;
        }

        // print union array
        for (int num : union) {

            System.out.print(num + " ");
        }
    }
}