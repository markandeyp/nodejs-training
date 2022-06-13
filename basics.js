var a = 9;

if (a < 10) {
  console.log("a is less than 10");
} else if (a == 10) {
  console.log("a is 10");
} else {
  console.log("a is more than 10");
}

var number = 10;

// condition ? "true": "false"
console.log(number % 2 == 0 ? "Even" : "Odd");

var day = 5;
//1 - Monday
//2 - Tuesday
//3 - Wednesday.....

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("You are not on earth");
}
