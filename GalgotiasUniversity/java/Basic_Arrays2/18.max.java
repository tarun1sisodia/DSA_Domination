class MaxMin {
    public static void main(String[] args) {
        int arr[] = {34,79,7,65,4,6,5,5,6,54,3};

        int MaxEven = Integer.MIN_VALUE;
        int MaxEven2 = Integer.MIN_VALUE;

        int MinEven = Integer.MAX_VALUE;
        int MinEven2 = Integer.MAX_VALUE;

        int MaxOdd = Integer.MIN_VALUE;
        int MaxOdd2 = Integer.MIN_VALUE;

        int MinOdd = Integer.MAX_VALUE;
        int MinOdd2 = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] % 2 == 0){
                if (arr[i] > MaxEven) {
                    MaxEven2 = MaxEven;
                    MaxEven = arr[i];
                } else if (arr[i] > MaxEven2 && arr[i] != MaxEven) {
                    MaxEven2 = arr[i];
                }

                if (arr[i] < MinEven) {
                    MinEven2 = MinEven;
                    MinEven = arr[i];   
                } else if (arr[i] < MinEven2 && arr[i] != MinEven) {
                    MinEven2 = arr[i];
                }
            } else {
                if (arr[i] > MaxOdd) {
                    MaxOdd2 = MaxOdd;
                    MaxOdd = arr[i];
                } else if (arr[i] > MaxOdd2 && arr[i] != MaxOdd) {
                    MaxOdd2 = arr[i];
                }

                if (arr[i] < MinOdd) {
                    MinOdd2 = MinOdd;
                        MinOdd = arr[i];   
                } else if (arr[i] < MinOdd2 && arr[i] != MinOdd) {
                    MinOdd2 = arr[i];
                }
            }
        }
        System.out.println("MaxEven = " + MaxEven + " MaxEven2 = " + MaxEven2);
        System.out.println("MaxOdd = " + MaxOdd + " MaxOdd2 = " + MaxOdd2);
        System.out.println("MinEven = " + MinEven + " MinEven2 = " + MinEven2);
        System.out.println("MinOdd = " + MinOdd + " MinOdd2 = " + MinOdd2); 

    }
}