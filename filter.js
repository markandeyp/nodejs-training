const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = array.filter(function (number) {
  return number % 2 === 0;
});

const odds = array.filter(function (number) {
  return number % 2 !== 0;
});

console.log("Even:", evens);
console.log("Odd:", odds);

const names = ["Alpha", "Beta", "Gamma", "Theta", "Zetta", "Peta", "Apple"];

const namesWithA = names.filter(function (name) {
  return name.startsWith("A") || name.startsWith("a");
});

console.log(namesWithA);
