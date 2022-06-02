//operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const posNeg = (a) => a * -1;
const percentage = (a) => a / 100;

//Operate, take in an operator, two numbers and evaluate the two numbers with operation
const operate = (operation, a, b) => {

    /**
    * operate(operation, a, b)
    * how to determine which operation to perform on the two numbers?
    * operator is going to be determined by which button user presses, so how to apply that button to these numbers and operate with them
    */

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


//display window
const display = document.getElementById('result');

//buttons, with event listeners added to them
const buttons = document.querySelectorAll('.button');
// for our buttons, on click, display THIS number in the display window, while adding the number to the current instance of operate()
buttons.forEach(button => {
    button.addEventListener('click', function(){

        console.log(button.id);
        display.innerHTML = button.innerHTML;//displaying what button was clicked in display window

        //if button is AC, reset back to zero?
        if(button.id == 'clear'){
            display.innerHTML = '0';
            //set back to zero, and also reset ints to be used with operate(), so that data is really reset for user
        }


    });
});





