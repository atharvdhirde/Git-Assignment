var start=2022;
var count=0;

function leapyear(){
    while (count < 20) { 
        if ((start % 4 == 0) && (start % 100 !== 0)||(start % 400 == 0)) {
            
            document.write(start+ "<br>");
            count++;
            start++;
        } 
        else {
            start++;
        }
    }       
}

document.write(leapyear());
