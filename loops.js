//Array
var names = ["Ram", "Rahim", "Joseph", "Sukhvinder"]; //array with 4 initial values

console.log(names[2]);
names[2] = "Josephine";
console.log(names[2]);

names[4] = "XYZ";
console.log(names[4]);

names.push("PQR"); //push an element at the back of the array
names.push("A", "B", "C"); //push more than one element at the back of the array

console.log(names);

var lastName = names.pop();
console.log(lastName);
console.log(names);
/*var array = []; //array with no values

var a = 11; //start
do {
  console.log("dowhile...A : " + a);
  a++; //step
} while (a <= 10); //end

a = 1; //start
while (a <= 10) {
  //end
  console.log("while...A : " + a);
  a++; //step
}

//for(start;end;step){//do something}
for (a = 1; a <= 10; a++) {
  console.log("for...A:" + a);
}*/

for (var name in names) {
  console.log("for..in: " + name);
}

for (var name of names) {
  console.log("for..of:" + name);
}
