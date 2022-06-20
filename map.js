const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squaredUp = [];

numbers.forEach(function (value) {
  squaredUp.push(value * value);
});

const squaredWithMap = numbers.map(function (value) {
  return value * value;
});

console.log(squaredUp);
console.log(squaredWithMap);
