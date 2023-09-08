let currentInput = '0';
let operator = '';
let prevInput = '';
const display = document.getElementById('display');
function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}
function setOperator(op) {
  operator = op;
  prevInput = currentInput;
  currentInput = '0';
  updateDisplay();
}
function clearDisplay() {
  currentInput = '0';
  operator = '';
  prevInput = '';
  updateDisplay();
}
function calculate() {
  const num1 = parseFloat(prevInput);
  const num2 = parseFloat(currentInput);
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  currentInput = result.toString();
  operator = '';
  prevInput = '';
  updateDisplay();
}
function updateDisplay() {
  display.textContent = currentInput;
}