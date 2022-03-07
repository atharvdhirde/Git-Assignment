var person={
    fname:String,
    lname:String,
    age:Number,
    skills:Array,
    address:{
    city:String,
    pincode:Number,
},
    
    dateOfBirth:Date, 
    married:Boolean,
    profession:String,
    };
    
var person=function(fname,lname,age,skills,dateOfBirth,address,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateOfBirth=dateOfBirth;
    this.address=address;
    this.married=married;
    this.profession=profession;
}
person1=new person("nikhil","goud",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst");

person2=new person("harish","chinna",21,"HTML","08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jr analyst");
print=function ()
{
    console.log(person1);
    console.log(person2);
}();