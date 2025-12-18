#include <stdio.h>

void swap(int *x, int *y){
   *x = *x + *y;
   *y = *x - *y;
   *x = *x - *y;
   printf("Physical Address: x = %p, y = %p\n", x, y);
   printf("Inside the Function: x = %d, y = %d\n", *x, *y);
}
int main(){
    int a = 10, b = 20;
    swap(&a, &b);
    printf("Physical Address: a = %p, b = %p\n", &a, &b);
    printf("Inside the Main: a = %d, b = %d\n", a, b);
    return 0;
}