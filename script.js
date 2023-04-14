const display = document.getElementById('result');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('[value]');

let currentOperand = '';
let previousOperand = '';
let currentOperator = null;

function updateDisplay() {
  display.innerText = currentOperand;
}

function clear() {
  currentOperand = '';
  previousOperand = '';
  currentOperator = null;
  updateDisplay();
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

function chooseOperator(operator) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    compute();
  }
  currentOperator = operator;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (currentOperator) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation.toString();
  currentOperator = null;
  previousOperand = '';
  updateDisplay();
  document.getElementById("myDiv").style.borderStyle = "solid"
}

clearButton.addEventListener('click', clear);

equalsButton.addEventListener('click', function() {
  if (currentOperator === null) return;
  compute();
});

numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      appendNumber(button.value);

operatorButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    chooseOperator(button.value);
  
  });


    });
  });
});


    
