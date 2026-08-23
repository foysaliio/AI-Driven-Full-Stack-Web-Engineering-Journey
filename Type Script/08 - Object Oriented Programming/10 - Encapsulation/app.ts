// Encapsulation keeps internal data protected
// and provides controlled access through methods.

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(5000);

console.log(account.getBalance());
account.deposit(2000);

console.log(account.getBalance());
account.withdraw(1000);

console.log(account.getBalance());

// Direct access is not allowed:

// account.balance = 100000;
