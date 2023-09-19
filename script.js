const display = document.getElementById("display");
display.textContent = "0";
const buttons = document.querySelectorAll("button");

let calculation = [];
let runningCalculation;

function calculate(button) {
  const value = button.textContent;

  if (value === "AC") {
    calculation = [];
    display.textContent = "0";
  } else if (value === "=") {
    console.log(runningCalculation);
    display.textContent = eval(runningCalculation);
  } else {
    calculation.push(value);
    runningCalculation = calculation.join("");
    display.textContent = runningCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
