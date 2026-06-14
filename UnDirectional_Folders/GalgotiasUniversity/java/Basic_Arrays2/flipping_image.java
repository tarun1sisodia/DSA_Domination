class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        for(int i = 0; i < image.length; i++){

            int k = 0;
            int p = image[i].length-1;

            while(k <= p){

                int temp  = image[i][k] ^ 1;
                image[i][k] = image[i][p] ^ 1 ;
                image[i][p] = temp;

                k++;
                p--;
            }
        }

        /*
        for(int i = 0 ; i < image.length; i++){
            for(int j = 0; j < image[i].length; j++){
                if(image[i][j] == 0) image[i][j] = 1;
                else image[i][j] = 0;
            }
        }
        */
        return image;
    }
}
