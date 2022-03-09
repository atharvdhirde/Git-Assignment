class Account{
    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    totalBalance(){
        return this.balance;
    }
} 

class SavingAccount extends Account{
    constructor(id, name, balance, interest){
        super(id, name, balance = balance + (balance*interest)/100);
    }
}

class CurrentAccount extends Account{
    constructor(id, name, balance, credit){
        super(id, name, balance = balance+credit);
    }
}

let savingAccount = new SavingAccount(001, "Atharv", 90000, 7);
let currentAccount = new CurrentAccount(002, "Dhirde", 80000, 12);

console.log(savingAccount.totalBalance());
console.log(currentAccount.totalBalance());