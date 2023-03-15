//write a typescript program which contains one function named as Fibonacci . That function should
//accepts one value from user and it print Fibonacci series till that number

//Input  : 21
//Output : 1    1   3   5   8   13  21


function DisplayFibonacci(Value : number): void 
{
    var No1 : number = 0;
    var No2 : number = 1;
    var No3 : number = 0;

    while(No3 < Value)
    {
        No3 = No1 + No2;

        if(No3 > Value)
        {
            break;
        }
        console.log(No3);

        No1 = No2;
        No2 = No3;
    }

}

var Value : number = 0;

console.log("Enter the number : ")
Value = 100;

console.log("Fibonacci series is :");
DisplayFibonacci(Value);
