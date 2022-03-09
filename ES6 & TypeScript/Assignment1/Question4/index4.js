var names = ['Tom', 'Ivan', 'Jerry'];
var lengths = names.map(function (name) { return name.length; });
var newArray = names.map(function (str) { return ({ name: str, length: str.length }); });
console.log(newArray);
