
#include <stdio.h>

int main() {
    // Write C code here
    int i,n;
    printf("Enter Size for Array:\n");
    scanf("%d",&n);
    int arr[n];
    for(int i =0;i<n;i++)
    {
     printf("Enter %d of array :\n",i);
     scanf("%d",&arr[i]);   
    }
    printf("Current Array is: \n");
    for(int i =0;i<n;i++){
        printf("[%d] at index = {%d}\n",arr[i],i);
    }
    printf("Starting the Bubble Sort\n");
    for(int i = n; i >0 ;i--){
        for(int j = 0; j < i-1;j++){
            if(arr[j]>arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    printf("After Bubble Sorting:\n");
    for(int i =0;i<n;i++){
        printf("[%d] at index {%d}:\n",arr[i],i);
    }
    return 0;
}
