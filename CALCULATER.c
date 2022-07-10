#include<stdio.h>
#include<conio.h>

int main()
{
  float num1;
  float num2;
  char op;
  float result;
  printf("enter the value of num1=");
  scanf(" %f", &num1);

  printf("enter the operetion=");
  scanf(" %c", &op);

  printf("enter the value num2=");
  scanf(" %f", &num2);

   switch(op)
   {
   case '*':
    result=num1*num2;
    printf("result=%f",result);
    break ;
       case '-':
    result=num1-num2;
    printf("result=%f",result);
    break ;
       case '+':
    result=num1+num2;
    printf("result=%f",result);
    break ;
       case '/':
    result=num1/num2;
    printf("result=%f",result);
    break ;
default:
        printf("invalid");

   }


}
