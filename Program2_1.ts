//write a typescript program which contains one function named as Maximum . That function 
//accepts array of numbers and return the largest number from array 

//Input  : 23   89  6   29  56  45  77  32
//Output : Maximum number is : 89

function Maximum(Arr : number[]) : number
{
    let Cnt : number = 0;
    let Max : number = Arr[0];

    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        if(Max < Arr[Cnt])
        {
            Max = Arr[Cnt];
        }
    }

    return Max;
}

var Ret : number = 0;

var Arr : number[] = [23,89,6,29,56,45,77,32];

Ret = Maximum(Arr);

console.log("Maximum number is : "+Ret);

//output
//Maximum number is : 89