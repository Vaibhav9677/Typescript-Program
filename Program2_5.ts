//write a typescript program which contains one function named as ChkString. That function 
//accepts string and check whether that string contains "Marvellous" or not 

//Input  : "Pune  Kothrud Marvellous Infosystem"
//Output : Marvellous

function ChkString(str : string, substr : string) : boolean
{
    if(str.indexOf(substr))
    {
        return true;
    }
    else
    {
        return false;
    }
}

var str : string = "Pune Kothrud Marvellous Infosystem";
var substr : string = "Marvellous";

var bRet : boolean = false;

bRet = ChkString(str,substr);

if(bRet == true)
{
    console.log("String contain "+substr+" in it");
}
else
{
    console.log("String dose not contain "+substr+" in it");
}

//Output :
//string contain Marvellous in it