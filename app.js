//operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const posNeg = (a) => a * -1;
const percentage = (a) => a / 100;

//Operate, take in an operator, two numbers and evaluate the two numbers with operation

/**
 * operate(operation, a, b)
 * how to determine which operation to perform on the two numbers?
 * operator is going to be determined by which button user presses, so how to apply that button to these numbers and operate with them
 */
const operate = (operation, a, b) => {
    //perform operation on numbers depending on what operation is passed
    switch(operation) {
        case 'add':
          return add(a,b);
          break;
        case 'subtract':
          return subtract(a,b);
          break;
        case 'multiply':
            return multiply(a,b);
        case 'divide':
            return divide(a,b);
      }//end switch
};//end operate()
