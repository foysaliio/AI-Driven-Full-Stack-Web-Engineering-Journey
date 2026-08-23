"use strict";
// Properties store data.
// Methods define actions or behavior.
class BankAccount {
    owner;
    balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
const foysalAccount = new BankAccount("Foysal", 5000);
console.log(foysalAccount);
console.log(foysalAccount.getBalance());
foysalAccount.deposit(1000);
console.log(foysalAccount.getBalance());
foysalAccount.withdraw(2500);
console.log(foysalAccount.getBalance());
