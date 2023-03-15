//write a typescript program which contains one function named as maximum. That function accepts three 
//parameter and it should returns largest value from that input parameters.
//Input : 23    89   6
//Output : Maximum number is = 89

function Maximum(No1 : number, No2 : number , No3 : number) : number
{
    if(No1 > No2 && No1 > No3)
    {
        return No1
    }

    if(No2 > No3 && No2 > No1)
    {
        return No2
    }

    if(No3 > No1 && No3 > No2)
    {
        return No3
    }
}

var Value1 : number = 23
var Value2 : number = 89
var Value3 : number = 6

var Ans : number = 0

Ans = Maximum(Value1,Value2,Value3)

console.log("Maximum numnber is : "+Ans)