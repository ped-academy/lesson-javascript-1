function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function calculate(operator, a, b) {
  try {
    console.log(operator(a, b));
  } catch (e) {
    console.warn(e);
  }
}

console.log("Usage: > calculate(sum, 2, 5)");
calculate(sum, 2, 5);
