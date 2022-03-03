
const number = parseInt(prompt('Enter the number: '));

let sum = 0;

for (let i = 1; i <= number; i++) {
    sum += i;
}

document.write("The sum of numbers are:"+sum);