class Main{
    int max1 = Integer.MIN_VALUE;
    int max2 = Integer.MIN_VALUE;
    int max3 = Integer.MIN_VALUE;
    int min = Integer.MAX_VALUE;

    int[] arr = {};

    for(int i : arr){
        if(max1 < i){
            max3 = max2;
            max2 = max1;
            max1 = i;
        }
        else if(max2 < i && max1 != i){
            max3 = max2;
            max2 = i;
        }
        else if(max3 < i && max2 != i && max1 != i){
            max3 = i;
        }
        else{
            System.out.println(..);
        }
    }
}