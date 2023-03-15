//write a typescript program which contains one function named as chkArmstrong . That function 
//accepts one number and check whether number is armstrong are not 

//Input  : 153
//Output : it is armstrong number

function Count_Digit(No : number) : number
{
    let Count : number = 0;


    while(No != 0)
    {
        No = parseInt(String(No/10));
        Count++;
    }
    return Count;
}


function chkArmstrong(Value : number) : boolean
{
    let DigitCount : number = 0;
    let Digit : number = 0;
    let No : number = Value;
    let i : number = 0;
    let Mult : number = 1;
    let Sum : number = 0;

    DigitCount = Count_Digit(Value);

    while(No != 0)
    {
        Digit = No % 10;

        for(i = 1; i <= DigitCount; i++)
        {
            Mult = Mult * Digit;
        }

        Sum = Sum + Mult;
        Mult = 1;

        No = parseInt(String(No/10));
    }
    return (Sum == Value);
}

var No : number = 0;
var BRet : boolean = false;

console.log("Enter the number :");
No = 153;

BRet = chkArmstrong(No);

if(BRet == true)
{
    console.log(No+" is an armstrong number");
}
else
{
    console.log(No+" is not an armstrong number");
}


//Output
//Enter the number :
//153 is an armstrong number