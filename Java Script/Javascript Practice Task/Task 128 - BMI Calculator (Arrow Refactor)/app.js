const calculateBMI = (weight, height) => {
  if (weight <= 0 || height <= 0) {
    return "Invalid";
  }
  const bmi = weight / (height * height);
  const formattedBmi = Number(bmi.toFixed(2));
  return formattedBmi;
};

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(60, -1.7));
