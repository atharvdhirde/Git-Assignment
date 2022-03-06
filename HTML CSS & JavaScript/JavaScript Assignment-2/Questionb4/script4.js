const arr1 = [5,9,2,7,6];
const arr2 = [25,81,49,9,4];

// pass a function to map
const a = arr1.map(x => x * x);
const b = arr2.map(x => Math.sqrt(x));
document.write("Square of each element in array: ",a,"<br>");
document.write("Square root of each element in array: ",b,"<br>");
