const result = Array(100)
  .fill(0)
  .map((__, index) => index + 1)
  .filter((number) => number % 5 === 0);

console.log(result);
