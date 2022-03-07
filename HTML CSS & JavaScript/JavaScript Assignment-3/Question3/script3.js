class Rectangle
{            
    constructor (width,height)
    {
        this.width=width;
        this.height=height;
    }                       
}
var Area;
function getArea()
{
    width=5;
    height=4;
    Area=width*height;
    return Area;
}

var rec1=new Rectangle(4,5);
rec1.height=50;
rec1.getArea();