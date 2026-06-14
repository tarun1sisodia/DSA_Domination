class ReplaceMaxwithMin {
    public static void main(String[] args) {
        int arr[] =  {18,0,25,19,33};

        int max = arr[0];
        int min = arr[0];
        for(int i = 1 ; i < arr.length ; i++){
            if(min > arr[i]) min = arr[i];
            if(max < arr[i]) max = arr[i];
        }
        System.out.println(min + " " + max);

        
    }
}