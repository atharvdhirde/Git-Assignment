class Rectangle
{
    constructor (width,height)
    {
        this.width=width;
        this.height=height;
    }
            
}
//new instances
var rec1=new Rectangle(4,5);
var rec2=new Rectangle(40,50);

rec1.height=4;
rec1.width=5;
rec1.colour='pink';
console.log(rec1);

rec2.height=40;
rec2.width=50;
rec2.colour='orange';
console.log(rec2);

//modify properties
rec1.height=14;
rec1.width=20;
rec1.colour='blue'
console.log(rec1);

//getArea
var Area;
function getArea()
{
    width=7;
    height=8;
     Area=width*height;
     return Area;
  
}
console.log("Area is"+getArea());
document.write("Area is"+getArea());