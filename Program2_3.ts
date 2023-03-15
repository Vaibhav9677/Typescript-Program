//write a typescript program which contains one function named as Maximum . That function 
//accepts array of numbers and return the second largest umber from that array 

//Input  : 23   89  6   29  56  45  77  32
//Output : seccond largest  number is : 77
function SortArray(Arr : number[]) : void
{
    let i : number = 0, j : number = 0;
    let temp : number = 0;
    let Bflag = false;

    do
    {
        Bflag = false;

        for(i = 0; i < Arr.length-1; i++)
        {
            if(Arr[i] < Arr[i+1])
            {
                temp = Arr[i];
                Arr[i] = Arr[i+1];
                Arr[i+1] = temp;
                Bflag = true;
            }
        }
        //j++;
    }while(Bflag != false)
}

function DisplayArray(Arr : number[]) : void
{
    let Cnt : number = 0;

    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        console.log(Arr[Cnt]);
    }
}

function Maximum(Arr : number[]) : number
{
    return Arr[1];
}

var Ret : number = 0;

var Arr : number[] = [23,89,6,29,56,45,77,32];

SortArray(Arr);

Ret = Maximum(Arr);

console.log("Second largest number is  : "+Ret);

//Output:
//Second largest number is  : 77