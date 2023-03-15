//write a typescript program which contains one function named as DisplayFactors. That function should
//accepts value from user and display its fcators of tha that number

//Input : 20
//Output : 1    2   4   5   10

function DisplayFactors(No : number) : void
{
    let Cnt : number = 0;
    
    for(Cnt = 1; Cnt <= No/2; Cnt++)
    {
        if((No % Cnt) == 0)
        {
            console.log(Cnt);
        }
    }
}

var No1 : number = 0;

console.log("Enter the number : ");
No1 = 20;

console.log("Factors of "+No1+" are :" );
DisplayFactors(No1);