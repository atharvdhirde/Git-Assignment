add = (a = 5, b = 4) => {
    console.log(a+b);
};
console.log(add());


//---------------------------------------------------------------------


const userFriends = (username, ...add) => {
    console.log(add);
    console.log(username);
    for (let i in add) {
        console.log("Atharv list have friend:" + add[i]);
    }
};
let username = "Atharv";
userFriends(username, "1", "2", "3", "4");


//----------------------------------------------------------------------


const printCapitalNames = () => {
    for (let i in Names) {
        let a = Names[i].toUpperCase();
        console.log("Capital:" + a);
    }
};
let Names = ['Atharv', 'Ayush', 'Abhinandan', 'Atit', 'Anuj'];
printCapitalNames(...Names);