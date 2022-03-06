let arr=[4,6,8,5,4,7];
function isEven(num){
    if(num%2==0){
      return true;
    }
    else{
      return false;
    }
    
    function find(arr,func){
        for(var i=0;i,arr.length;i++){
            if(func(arr[i])==true){
                return arr[i];
            }
            
        }    
    };
};
document.write(find(arr,isEven));