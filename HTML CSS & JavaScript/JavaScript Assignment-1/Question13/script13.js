function forloop(arr){
    sum=0
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
};

function whileloop(arr){
    sum=0;
    i=0;
    while(i<arr.length)
    {
        sum+=arr[i];
        i++;
    }
    return sum;
};

function dowhile_loop(arr){
    sum=0;
    i=0;
    do{
        sum+=arr[i];
        i++;
    }while(i<arr.length);
    return sum;
};

let arr=[1,2,3,4,5,6,7,8,9];

document.write("Sum of number from for loop : "+forloop(arr),"<br>");
document.write("Sum of number from while loop : "+whileloop(arr),"<br>");
document.write("Sum of number from do-while loop : "+dowhile_loop(arr),"<br>");