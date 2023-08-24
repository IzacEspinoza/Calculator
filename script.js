//Basic functins of calculator
//additon
const add = (a, b) => {return a + b;}
//subtraction
const subtract = (a, b) => {return a - b};
//multiplication
const multiply = (a, b) => {return a * b;}
//division
const divide = (a, b) => {return a / b;}

//Calculation function
//Take in two numbers and an operation, then call from above(depending on the operator used)
const calculate = (num1, operator, num2) => {
    //save the current value from a single calc(one operation at time)
    let current = 0;
    //first see what operator was used(+, *, - etc)
    //then call a function from above with parameters plugged in based on what operation they chose
    switch(operator) {
        case '*':
            //call a function
            console.log(current = multiply(num1, num2));
            break;
        case '+': 
            //call
            console.log(current = add(num1, num2));
            break;
        case '-':
            //call
            console.log(current = subtract(num1, num2));
            break;
        case '/':
            //calll
            console.log(current = divide(num1, num2));
            break;
        default:
            console.log('Sorry couldnt figure it out');
    }
};

//Displaying to DOM functions

//display port
const display = document.getElementById('display');

//Show buttons value on clicking them
const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        //console.log(button.textContent);
        display.textContent = button.textContent;
    });
});

