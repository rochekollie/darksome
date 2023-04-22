// class Person {
//   constructor (name, age) {
//     return {
//       name,
//       age,
//     }
//   }
// }

class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('Alice', 25);
console.log(person);



const user = {
  name: 'Alice',
  age: 25,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

console.log(4 + 3);


for (let i = 0; i < 10; i++) {
  console.log(i);
}
