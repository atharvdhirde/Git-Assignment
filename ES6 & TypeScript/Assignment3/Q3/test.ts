interface Printable{
    print();
}

class Circle implements Printable{
    constructor(radius){
        this.radius = radius;
        this.area = 3.1*radius*radius;
    }
    print(){
        console.log(this.radius);
        console.log(this.area);
        
         
    }
}

class Employee implements Printable{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    print(){
        console.log("Id: "+this.id+" \nName: "+this.name);
        
    }
}

let circle = new Circle(2);
let employee = new Employee(001,"Atharv");

function PrintAll(obj1, obj2){
    obj1.print();
    obj2.print();
}
PrintAll(circle,employee);