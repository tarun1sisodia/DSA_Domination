public class Main {

    public static void main(String[] args) {

        int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

        brute(arr);
        better(arr);
        kadane(arr);
    }

    static void brute(int[] arr) {

        int n = arr.length;
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {

            for (int j = i; j < n; j++) {

                int sum = 0;

                for (int k = i; k <= j; k++) {
                    sum += arr[k];
                }

                max = Math.max(max, sum);
            }
        }

        System.out.println("Brute Max Sum = " + max);
    }

    static void better(int[] arr) {

        int max = Integer.MIN_VALUE;
        int n = arr.length;

        for (int i = 0; i < n; i++) {

            int sum = 0;

            for (int j = i; j < n; j++) {

                sum += arr[j];
                max = Math.max(max, sum);
            }
        }

        System.out.println("Better Max Sum = " + max);
    }

    static void kadane(int[] arr) {

        int n = arr.length;

        int max = Integer.MIN_VALUE;
        int sum = 0;
        //for taking the indexes from where to where..
        int ansStart = -1;
        int ansEnd = -1;
        
        int start = 0;
        
        for (int i = 0; i < n; i++) {
            
            if(sum == 0) start =i;
            sum += arr[i];

            // max = Math.max(max, sum);
            if(sum > max ){
                max = sum;
                //start or end index update
                ansStart = start;
                ansEnd = i;
            }

            if (sum < 0) sum = 0;
            
        }

        System.out.println("Kadane Max Sum = " + max);
    }
}