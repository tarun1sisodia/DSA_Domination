#include <stdio.h>

int main()
{
    int n;
    printf("What's the Limit to Print\n");
    scanf("%d", &n);
    printf("Starting the Loop now\n");
    for (int i = 1; i <= n; i++)
    {
        printf("%d\n", i);
    }
    return 0;
}