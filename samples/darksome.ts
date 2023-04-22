// Define a class called Person
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): void {
    console.log(`Hello, my name is ${ this.name } and I am ${ this.age } years old.`);
  }
}

// Create two objects of the Person class
const person1: Person = new Person("Alice", 25);
const person2: Person = new Person("Bob", 30);

// Access the properties of the objects
console.log(person1.name); // Output: "Alice"
console.log(person2.age); // Output: 30

// Declare and initialize variables with different data types
const myNumber: number = 42;
const myArray: string[] = [ "apple", "banana", "orange" ];
const myString: string = "Hello, world!";

// Use the variables in different ways
console.log(myNumber * 2); // Output: 84
console.log(myArray[ 1 ]); // Output: "banana"
console.log(myString.toUpperCase()); // Output: "HELLO, WORLD!"

// Call the sayHello() method of the Person objects
person1.sayHello(); // Output: "Hello, my name is Alice and I am 25 years old."
person2.sayHello(); // Output: "Hello, my name is Bob and I am 30 years old."
