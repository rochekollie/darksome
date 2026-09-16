#include <iostream>
#include <string>

using namespace std;

// Define a class called Person
class Person {
public:
  string name;
  int age;

  Person(string name, int age) {
    this->name = name;
    this->age = age;
  }

  void sayHello() {
    cout << "Hello, my name is " << this->name << " and I am " << this->age << " years old." << endl;
  }
};

int main() {
  // Create two objects of the Person class
  Person person1("Alice", 25);
  Person person2("Bob", 30);

  // Access the properties of the objects
  cout << person1.name << endl; // Output: "Alice"
  cout << person2.age << endl; // Output: 30

  // Declare and initialize variables with different data types
  int myNumber = 42;
  string myArray[3] = {"apple", "banana", "orange"};
  string myString = "Hello, world!";

  // Use the variables in different ways
  cout << myNumber * 2 << endl; // Output: 84
  cout << myArray[1] << endl; // Output: "banana"
  cout << myString << endl; // Output: "Hello, world!"
  transform(myString.begin(), myString.end(), myString.begin(), ::toupper);
  cout << myString << endl; // Output: "HELLO, WORLD!"

  // Call the sayHello() method of the Person objects
  person1.sayHello(); // Output: "Hello, my name is Alice and I am 25 years old."
  person2.sayHello(); // Output: "Hello, my name is Bob and I am 30 years old."

  return 0;
}
