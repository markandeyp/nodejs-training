//function functionName (arguments) {
//  body of function
// }

function promptValue() {
  var value;
  while (!value) {
    value = prompt("Enter a value");
  }
  return value;
}

//console.log(promptValue());

function add() {
  var sum = 0;
  if (arguments.length) {
    for (arg of arguments) {
      sum = sum + arg;
    }
  }
  console.log(sum);
}

function print(msg = "Hello Function") {
  console.log(msg);
}

add(10, 20); //number1 = 10, number2 = 20 = 30
add(10); //number1 = 10, number2 = undefined = 10 + undefined = NaN
add(); //number1 = ?, number2 =? = NaN
add(10, 20, 30); //number1 = 10, number2 = 20, number3 = 30 = 10 + 20 = 30
add(10, 20, 30, 40, 50, 60);

print("Hello from optional argument");
print();
