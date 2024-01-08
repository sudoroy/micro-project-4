let currentInput = "0";
let operator = "";
let prevInput = "0";

function updateDisplay() {
  document.getElementById("display").innerText = currentInput;
}

function appendNumber(number) {
  if (currentInput === "0" || currentInput === "-0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  prevInput = currentInput;
  currentInput = "0";
  updateDisplay();
}

function reset() {
  currentInput = "0";
  operator = "";
  prevInput = "0";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || "0";
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function calculate() {
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(prevInput) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(prevInput) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(prevInput) * parseFloat(currentInput);
      break;
    case "/":
      if (parseFloat(currentInput) !== 0) {
        result = parseFloat(prevInput) / parseFloat(currentInput);
      } else {
        alert("Error: Division by zero");
        reset();
        return;
      }
      break;
  }
  currentInput = result.toString();
  operator = "";
  prevInput = "0";
  updateDisplay();
}
