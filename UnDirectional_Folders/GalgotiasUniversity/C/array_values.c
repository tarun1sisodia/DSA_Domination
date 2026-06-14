#include <stdio.h>
int main()
{
    int n = 0;
    scanf("%d", &n);
    int array[n];
    int max = 0, min = 0;
    printf("Hello World\n");
    // is for scanf or inputing the values in array.
    for (int i = 0; i < n; i++)
    {
        // printf("Enter Your Elements:\n");
        scanf("%d", &array[i]);
    }
    // for printing all the elements
    for (int i = 0; i < n; i++)
    {
        printf("%d", array[i]);
    }
    for (int i = 0; i < n; i++)
    {
        if (array[i] > max)
        {
            min = max;
            max = array[i];
        }
        if (array[i] < min)
        {
            min = array[i];
        }
    }
    printf("\nMaximum = %d\n", max);
    printf("\nMinimum = %d\n", min);
    return 0;
}