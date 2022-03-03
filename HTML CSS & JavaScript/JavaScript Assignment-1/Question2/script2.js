
const number = parseInt(prompt('Enter the number: '));

sum = 0;
p=0

for (let i = 1; i <= number; i++) {
    if(i%3==0 || i%5==0){
        sum += i;
    }

}
document.write("The sum of numbers which are completely divisible by 3 and 5 is:"+sum);