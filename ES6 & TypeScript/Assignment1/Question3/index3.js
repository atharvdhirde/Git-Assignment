var order1 = {
    id: 38,
    title: "The King",
    price: 6000,
    printorder: function () {
        return (this.id);
    },
    getPrice: function () {
        return (this.price);
    }
};
var order2 = Object.assign({}, order1);
console.log(order1);
console.log(order2);
