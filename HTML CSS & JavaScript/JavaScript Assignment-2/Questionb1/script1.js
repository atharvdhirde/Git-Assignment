var x = prompt("Enter the number: "); 

//f1
function square(x){
    return x*x;
};

//f2
function double(x){
    return x*2;
};

function composeValue(){
    return square(double(x));   
    //square(double(6)) -->square(6*2)
    //square(12)        -->square(12*12)   -->  s144
};

document.write("The Compose Value is : "+composeValue());