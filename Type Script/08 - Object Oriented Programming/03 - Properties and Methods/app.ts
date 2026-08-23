// Properties store data.
// Methods define actions or behavior.

class BankAccount {
  owner: string;
  balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    this.balance -= amount;
  }
  getBalance(): number {
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
