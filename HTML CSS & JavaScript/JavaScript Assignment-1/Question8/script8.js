function concatenate(){
    arr1=["a","b","c"];
    document.write("Array_1: "+arr1,"<br>");
    
    arr2=["1","2","3"];
    document.write("Array_2: "+arr2,"<br>");
    
    arr3 = arr1.concat(arr2);
    document.write("Array_1+Array_2: "+arr3);
}
concatenate()