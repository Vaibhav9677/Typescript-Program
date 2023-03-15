//write a typescript program which contains one function named as ChkPrime. That function should
//accepts one value from user and it should return true if the given number is prime and otherwise return false.

//Input  : 11
//Output : It is a prime

function ChkPrime(No : number) : boolean
{
    let Cnt : number = 0;
    let Bflag : boolean = true;

    if(No == 1)
    {
        return false;
    }

    if(No <  0)
    {
        No = -No;
    }

    for(Cnt = 2; Cnt <= No /2; Cnt++)
    {
        if(No % Cnt == 0)
        {
            Bflag = false;
            break;
        }
    }

    return Bflag;
}

var No : number = 0;
var bRet : boolean = false;

console.log("Enter the number : ");
No = 11;

bRet = ChkPrime(No);

if(bRet == true)
{
    console.log(No+" is prime number");
}
else
{
    console.log(No+" is not a prime number");
}
