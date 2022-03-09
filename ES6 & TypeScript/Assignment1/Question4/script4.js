let names = ['Tom', 'Ivan', 'Jerry'];

let lengths = names.map(name => name.length);
    
const newArray = names.map((str) => ({ name: str, length: str.length }))
console.log(newArray);