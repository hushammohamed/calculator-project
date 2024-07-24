let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (currentInput !== "") {
    currentInput += " " + op + " ";
    display.value = currentInput;
  }
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}
