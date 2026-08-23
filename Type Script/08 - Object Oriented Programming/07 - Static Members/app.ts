// Static members belong to the class itself,
// not to individual objects.

class MathHelper {
  static pi: number = 3.14159;

  static square(number: number): number {
    return number * number;
  }
}

console.log(MathHelper.pi);

console.log(MathHelper.square(5));

// We do not need to create an object.

// This would be incorrect:

// const helper = new MathHelper();

// helper.square(5);

// Another example

class AddCalculate {
  static randomNumber: number = 15;

  static addition(value: number): number {
    return this.randomNumber + value;
  }
}

console.log(AddCalculate.randomNumber);
console.log(AddCalculate.addition(50));
