//declare global variable
var operator = undefined;
var wasLastButtonAnOperator = false;
var number1 = 0;
var number2 = 0;

//get the list of numbered buttons
var numberButtons = document.getElementsByClassName("btn-digit");
//iterate through the results and handle click event
for (i = 0; i < numberButtons.length; i++) {
  //get reference to the button
  var button = numberButtons.item(i);

  //handle the click event of the button
  button.addEventListener("click", function (event) {
    //get the button's text
    var buttonValue = event.target.innerText;
    //display in result box
    displayNumber(buttonValue);
  });
}

//get the list of operator buttons
var operatorButtons = document.getElementsByClassName("btn-ops");

//iterate throught the results and handle the click event
for (i = 0; i < operatorButtons.length; i++) {
  //get the reference to the button
  var button = operatorButtons.item(i);
  button.addEventListener("click", function (event) {
    //check if number1 and operator exits, if yes, calculate the result
    if (number1 != undefined && operator != undefined) {
      calculate();
    }
    //set the last button to operator
    wasLastButtonAnOperator = true;
    //capture the operator
    operator = event.target.innerText;
    //capture number 1
    number1 = parseInt(document.getElementById("result").value);
  });
}

function displayNumber(number) {
  if (number != undefined) {
    //clear the result box when last button was an operator
    if (wasLastButtonAnOperator) {
      document.getElementById("result").value = "";
      wasLastButtonAnOperator = false;
    }
    //append the number to the result box
    document.getElementById("result").value += number;
  }
}

function calculate() {
  //capture the number2
  number2 = parseInt(document.getElementById("result").value);
  //check if number1, number2 and operator exist
  if (number1 != undefined && number2 != undefined && operator != undefined) {
    var result = 0;
    //check the operator and calculate the result
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "x":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
    }
    //display the result
    document.getElementById("result").value = result;
    //set last button to operator
    wasLastButtonAnOperator = true;
  }
}

function reset() {
  //reset all variables and result box
  operator = undefined;
  number1 = 0;
  number2 = 0;
  wasLastButtonAnOperator = false;
  document.getElementById("result").value = "";
}
