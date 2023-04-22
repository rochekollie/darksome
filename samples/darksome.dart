class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void sayHello() {
    print('Hello, my name is $name and I am $age years old.');
  }
}

void main() {
  // Create two objects of the Person class
  var person1 = Person('Alice', 25);
  var person2 = Person('Bob', 30);

  // Access the properties of the objects
  print(person1.name); // Output: "Alice"
  print(person2.age); // Output: 30

  // Declare and initialize variables with different data types
  int myNumber = 42;
  List<String> myArray = ['apple', 'banana', 'orange'];
  String myString = 'Hello, world!';

  // Use the variables in different ways
  print(myNumber * 2); // Output: 84
  print(myArray[1]); // Output: "banana"
  print(myString); // Output: "Hello, world!"
  print(myString.toUpperCase()); // Output: "HELLO, WORLD!"

  // Call the sayHello() method of the Person objects
  person1.sayHello(); // Output: "Hello, my name is Alice and I am 25 years old."
  person2.sayHello(); // Output: "Hello, my name is Bob and I am 30 years old."
}
