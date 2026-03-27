public class AreaOverloading {

    public double calculateArea(double side) {
        return side * side;
    }

    public double calculateArea(float radius) {
        return Math.PI * radius * radius;
    }

    public double calculateArea(double length, double width) {
        return length * width;
    }

    public double calculateArea(float base, float height) {
        return 0.5 * base * height;
    }

    public static void main(String[] args) {
        AreaOverloading obj = new AreaOverloading();

        System.out.println("----- Area Calculation Using Method Overloading -----");
        
        System.out.printf("Area of Square (side 5.0): %.2f\n", obj.calculateArea(5.0));
        System.out.printf("Area of Circle (radius 4.0): %.2f\n", obj.calculateArea(4.0f));
        System.out.printf("Area of Rectangle (10.0 x 5.0): %.2f\n", obj.calculateArea(10.0, 5.0));
        System.out.printf("Area of Triangle (base 6.0, height 3.0): %.2f\n", obj.calculateArea(6.0f, 3.0f));
    }
}
