const list1 = [1, 2, 3, 4, 5];
const list2 = list1.concat(6, 7);
const list3 = [...list1, 6, 7]; // ... is spread operator here which expands the list
console.log("list1", list1);
console.log("list2", list2);
console.log("list3", list3);

const [a, b, ...other] = list2; // ... is rest operator here which takes all other values (rest of the values) from the list
console.log(`first: ${a}`);
console.log(`second: ${b}`);
console.log("other:", other);

const person = {
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com",
};

console.log("Person:", ...Object.keys(person));

function names(name1, name2, ...otherNames) {
  console.log(name1);
  console.log(name2);
  console.log(otherNames);
}

names("A", "B", "C", "D", "E", "F", "G");
