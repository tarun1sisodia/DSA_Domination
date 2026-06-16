class multicatch {
    public static void main(String args[]) {
        try {
            //Explicity told size is 5...
              int nums[] = new int[5];
              // inserting data at index 10 which doesn't even exits
                nums[10] = 50;
                //this statements create expections..
                // Division by zero... 
                  int x = 10 / 0;
            }
            catch (ArithmeticException e ) {
                System.out.println("Arithmetic Exception");
            }
            catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Array Index Out of Bounds Exception");
            }
            catch (Exception e) {
                System.out.println("General Exception");
            }
        }
}
