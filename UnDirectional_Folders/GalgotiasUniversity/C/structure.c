#include<stdio.h>

struct Student{
    char name[10];
    int age;
    float marks;
};

int main()
{
    struct Student s1 = {"Karan",21,35.00};
    printf("%s\t%d\t%f",s1.name, s1.age, s1.marks);
    return 0;
}
