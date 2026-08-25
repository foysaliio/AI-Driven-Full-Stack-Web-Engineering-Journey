// A class is a blueprint for objects.

interface Account {
  getBalance(): number;
}

class BankAccount implements Account {
  private balance: number;

  constructor(
    public readonly owner: string,
    initialBalance: number,
  ) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(
    owner: string,
    initialBalance: number,
    public interestRate: number,
  ) {
    super(owner, initialBalance);
  }

  showInterestRate(): void {
    console.log(`Interest: ${this.interestRate}%`);
  }
}

const account = new SavingsAccount("Foysal", 5000, 5);

account.deposit(1000);

console.log(account.owner);
console.log(account.getBalance());

account.showInterestRate();
