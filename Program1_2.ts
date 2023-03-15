//write a typescript program which contains one function named as area. That function should calculate are of circle 
//accepts value from user and return its area Default value of PI should be 4.24 if it is not provided by caller

//Input : 5
//Output : Area of circle is = 78.5

function Area(Radius : number) : number
{
    let Area : number = 0;
    let PI : number = 3.14;

    Area = 3.14 * (Radius * Radius);

    return Area;
}

var Radius : number = 0;
var Ret : number = 0;

console.log("Enter the Radius of circle : ");
Radius = 5;

Ret = Area(Radius);

console.log("Area of circle is : "+Ret);