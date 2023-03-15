//write a typescript program which contains one function named as Summation . That function 
//accepts array of numbers and return the summation of each number from that array 

//Input  : 23   6  7   4  5  7  
//Output : Addition  is : 52

function Summation(Arr : number[]) : number
{
    let Cnt : number = 0;
    let Sum : number = 0;

    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        Sum = Sum + Arr[Cnt];
    }

    return Sum;
}

var Ret : number = 0;

var Arr : number[] = [23,6,7,4,5,7];

Ret = Summation(Arr);

console.log("Addition is  : "+Ret);

//Output:
//Addition is  : 52