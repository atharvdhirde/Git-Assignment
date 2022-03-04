function coinFlip() {
    return(Math.random() < 0.3) ? 'Heads' : 'Tails'; 
}


var howManyTimes = prompt("Enter a head ratio: "); 
var countHeads=0; 
for (var i=0; i<howManyTimes;i++){
if (coinFlip()==='Heads'){
 countHeads++;
}
}

document.write("Heads appear in fraction"+(countHeads/howManyTimes));