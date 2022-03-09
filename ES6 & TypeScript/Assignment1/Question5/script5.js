add = function (a, b) {
    if (a === void 0) { a = 5; }
    if (b === void 0) { b = 4; }
    console.log(a + b);
};
console.log(add());
//---------------------------------------------------------------------
var userFriends = function (username) {
    var add = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        add[_i - 1] = arguments[_i];
    }
    console.log(add);
    console.log(username);
    for (var i in add) {
        console.log("Atharv list have friend:" + add[i]);
    }
};
var username = "Atharv";
userFriends(username, "1", "2", "3", "4");
//----------------------------------------------------------------------
var printCapitalNames = function () {
    for (var i in Names) {
        var a = Names[i].toUpperCase();
        console.log("Capital:" + a);
    }
};
var Names = ['Atharv', 'Ayush', 'Abhinandan', 'Atit', 'Anuj'];
printCapitalNames.apply(void 0, Names);
