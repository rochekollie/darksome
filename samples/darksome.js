// Define a class called Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create two objects of the Person class
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Access the properties of the objects
console.log(person1.name); // Output: "Alice"
console.log(person2.age); // Output: 30

// Declare and initialize variables with different data types
const myNumber = 42;
const myArray = ["apple", "banana", "orange"];
const myString = "Hello, world!";

let userName = prompt("What is your name?");

if (myNumber === 42) {
  return true;
}

const myFunction = () => {
  console.log("Hello, world!");
};

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    console.log(element);
  }
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

switch (key) {
  case value:
    console.log("value");
    break;
  case value:
    console.log("value");
    break;
  default:
    console.log("default");
    break;
}

// Use the variables in different ways
console.log(myNumber * 2); // Output: 84
console.log(myArray[1]); // Output: "banana"
console.log(myString.toUpperCase()); // Output: "HELLO, WORLD!"

// Call the sayHello() method of the Person objects
person1.sayHello(); // Output: "Hello, my name is Alice and I am 25 years old."
person2.sayHello(); // Output: "Hello, my name is Bob and I am 30 years old."

console.log("Hello, world!");

const date = new Date();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Hello, world!");
});


const student = {
  name: "Alice",
  age: 25,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(student.sayHello()); // Output: "Hello, my name is Alice"

console.log("Hello, world!");


function createUser(name, age) {
  return {
    name,
    age
  };
}

document.querySelector("button").addEventListener("click", () => {
  alert("Hello, world!");
}));
