import java.util.Scanner;

class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int row = sc.nextInt();
        int col = sc.nextInt();

        if(row <= 0 || col <= 0) {
            System.exit(0);
        }

        int[][] mat = new int[row][col];

        for(int i = 0; i < row; i++) {
            for(int j = 0; j < col; j++) {
                mat[i][j] = sc.nextInt();
            }
        }

        int[][] temp = new int[col][row];

        for(int i = 0; i < row; i++) {
            for(int j = 0; j < col; j++) {
                // row -> mat[i].length
                // col -> temp[j].length
                temp[j][i] = mat[i][j];
            }
        }

        System.out.println("Original Matrix:");
        for(int i = 0; i < row; i++) {
            // col -> mat[0].length or mat[i].length
            for(int j = 0; j < col; j++) {
                System.out.print(mat[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println("Transpose Matrix:");
        for(int i = 0; i < col; i++) {
            for(int j = 0; j < row; j++) {
                System.out.print(temp[i][j] + " ");
            }
            System.out.println();
        }

        sc.close();
    }
}