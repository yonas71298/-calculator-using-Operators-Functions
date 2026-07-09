"use strict";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultOutput = document.getElementById("result");

function getNumberValue(inputElement, fieldName) {
  const value = inputElement.value.trim();

  if (value === "") {
    return { error: `Please enter a valid number for ${fieldName}.` };
  }

  const number = Number(value);

  if (Number.isNaN(number)) {
    return { error: `${fieldName} must be a valid number.` };
  }

  return { value: number };
}

function displayResult(message, type) {
  resultOutput.textContent = message;
  resultOutput.classList.remove("success", "error");

  if (type === "success") {
    resultOutput.classList.add("success");
  } else if (type === "error") {
    resultOutput.classList.add("error");
  }
}

function formatResult(value) {
  if (!Number.isFinite(value)) {
    return "Result is not a finite number.";
  }

  const rounded = Math.round(value * 1e10) / 1e10;
  return String(rounded);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function squareRoot(x) {
  if (x < 0) {
    return null;
  }
  return Math.sqrt(x);
}

function cubeRoot(x) {
  return Math.cbrt(x);
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function validateTwoNumbers() {
  const first = getNumberValue(num1Input, "First Number");
  if (first.error) {
    displayResult(first.error, "error");
    return null;
  }

  const second = getNumberValue(num2Input, "Second Number");
  if (second.error) {
    displayResult(second.error, "error");
    return null;
  }

  return { num1: first.value, num2: second.value };
}

function validateSingleNumber() {
  const first = getNumberValue(num1Input, "First Number");
  if (first.error) {
    displayResult(first.error, "error");
    return null;
  }

  return { num1: first.value };
}

function handleBasicOperation(operationName, calculateFn) {
  const values = validateTwoNumbers();
  if (!values) {
    return;
  }

  const { num1, num2 } = values;
  const result = calculateFn(num1, num2);

  if (operationName === "Division" && result === null) {
    displayResult("Cannot divide by zero.", "error");
    return;
  }

  displayResult(`${operationName}: ${formatResult(result)}`, "success");
}

function handleSquareRoot() {
  const values = validateSingleNumber();
  if (!values) {
    return;
  }

  const result = squareRoot(values.num1);

  if (result === null) {
    displayResult("Cannot calculate square root of a negative number.", "error");
    return;
  }

  displayResult(`Square Root (√${values.num1}): ${formatResult(result)}`, "success");
}

function handleCubeRoot() {
  const values = validateSingleNumber();
  if (!values) {
    return;
  }

  const result = cubeRoot(values.num1);
  displayResult(`Cube Root (∛${values.num1}): ${formatResult(result)}`, "success");
}

function handlePower() {
  const values = validateTwoNumbers();
  if (!values) {
    return;
  }

  const { num1, num2 } = values;
  const result = power(num1, num2);
  displayResult(`Power (${num1}^${num2}): ${formatResult(result)}`, "success");
}

document.getElementById("btn-add").addEventListener("click", function () {
  handleBasicOperation("Addition", add);
});

document.getElementById("btn-subtract").addEventListener("click", function () {
  handleBasicOperation("Subtraction", subtract);
});

document.getElementById("btn-multiply").addEventListener("click", function () {
  handleBasicOperation("Multiplication", multiply);
});

document.getElementById("btn-divide").addEventListener("click", function () {
  handleBasicOperation("Division", divide);
});

document.getElementById("btn-sqrt").addEventListener("click", handleSquareRoot);
document.getElementById("btn-cbrt").addEventListener("click", handleCubeRoot);
document.getElementById("btn-power").addEventListener("click", handlePower);
