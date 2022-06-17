// Normal javascript variable, scoped globally
var name = "Node JS";
// Constant value, must be assigned at declaration, can't be reassigned
const greetings = "Hello";
{
  var xyz = 10;
  // Scoped variables
  let age = 12;
  console.log(`Age: ${age}`);
}

console.log(`xyz: ${xyz}`);

class Person {
  name;
  age;
  gender;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  print() {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}`);
  }

  greet() {
    console.log("Outside", this);
    setTimeout(() => {
      console.log("Inside", this, arguments);
      console.log(`${this.name} says Hello to everyone`);
    }, 1000);

    /*const that = this;
    setTimeout(function () {
      console.log(`${that.name} says Hello to everyone`);
    }, 1000);*/
  }
}

const ramesh = new Person("Ramesh", 26, "Male");
const geeta = new Person("Geeta", 29, "Female");
ramesh.print();
geeta.print();
ramesh.greet();
geeta.greet();

const myObj = {
  key: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
  key5: "value5",
  key6: "value6",
  key7: 10,
};

{
  let { key, key7 } = myObj;
  console.log(`Key: ${key}, Key2: ${key7}`);
}
