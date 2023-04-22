// Define a class called Person
class Person {
  String name;
  int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public void sayHello() {
    System.out.println("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
}

public class Main {
  public static void main(String[] args) {
    // Create two objects of the Person class
    Person person1 = new Person("Alice", 25);
    Person person2 = new Person("Bob", 30);

    // Access the properties of the objects
    System.out.println(person1.name); // Output: "Alice"
    System.out.println(person2.age); // Output: 30

    // Declare and initialize variables with different data types
    int myNumber = 42;
    String[] myArray = {"apple", "banana", "orange"};
    String myString = "Hello, world!";

    // Use the variables in different ways
    System.out.println(myNumber * 2); // Output: 84
    System.out.println(myArray[1]); // Output: "banana"
    System.out.println(myString.toUpperCase()); // Output: "HELLO, WORLD!"

    // Call the sayHello() method of the Person objects
    person1.sayHello(); // Output: "Hello, my name is Alice and I am 25 years old."
    person2.sayHello(); // Output: "Hello, my name is Bob and I am 30 years old."
  }
}
