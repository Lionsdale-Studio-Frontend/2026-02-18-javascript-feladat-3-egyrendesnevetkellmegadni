function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return null;
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return null;
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return null;
  return a * b;
}

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return null;
  if (b == 0) return null; 
  return a / b;
}

function sumArray(numbers) {
  if (!Array.isArray(numbers)) return null;
  if (numbers.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") return null;
    sum += numbers[i];
  }

  return sum;
}

function average(numbers) {
  if (!Array.isArray(numbers)) return null;
  if (numbers.length === 0) return null;

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
  }

  return sum / numbers.length;
}

function max(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max; 
}

function min(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;

  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

function isEven(number) {
  if (typeof number !== "number") return null;
  return number % 2 === 0; 
}

function factorial(n) {
  if (typeof n !== "number") return null;
  if (n < 0) return null;

  if (n === 0) return 1;

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result; 
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  average,
  max,
  min,
  isEven,
  factorial,
};