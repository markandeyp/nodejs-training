const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach(function (value) {
  sum += value;
});

console.log(sum);

const result = numbers.reduce(function (pv, cv) {
  return pv + cv;
}, 0);

console.log(result);
