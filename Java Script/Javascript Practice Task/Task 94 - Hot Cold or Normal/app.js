// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Returns: a string

function checkTemperature(temp) {
  if (temp >= 30) {
    return "Hot";
  } else if (temp <= 15) {
    return "Cold";
  } else {
    return "Normal";
  }
}

console.log(checkTemperature(35)); // Expected: "Hot"
console.log(checkTemperature(10)); // Expected: "Cold"
console.log(checkTemperature(20)); // Expected: "Normal"
