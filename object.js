var student = {
  name: "Ramesh",
  batch: "B.Tech 1",
  address: "Vizag",
};

console.log(student.name); //reading a prop
student.name = "Ramesh Kumar"; //writing to a prop
console.log(student);

console.log("student is: " + typeof student);

var x = [1, 2, 3];
console.log("x is: " + typeof x);
console.log("is X an array: " + Array.isArray(x));
console.log("is student an array: " + Array.isArray(student));

/*for (var prop of student) {
  console.log(prop);
}*/

for (var prop in student) {
  console.log(prop, student[prop]);
}
