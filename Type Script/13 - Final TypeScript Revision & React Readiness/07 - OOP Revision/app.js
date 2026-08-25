"use strict";
// A class is a blueprint for objects.
class BankAccount {
    owner;
    balance;
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SavingsAccount extends BankAccount {
    interestRate;
    constructor(owner, initialBalance, interestRate) {
        super(owner, initialBalance);
        this.interestRate = interestRate;
    }
    showInterestRate() {
        console.log(`Interest: ${this.interestRate}%`);
    }
}
const account = new SavingsAccount("Foysal", 5000, 5);
account.deposit(1000);
console.log(account.owner);
console.log(account.getBalance());
account.showInterestRate();
