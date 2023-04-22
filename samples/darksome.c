#include <stdio.h>
#include <string.h>

// Define a struct called Person
struct Person {
  char name[50];
  int age;
};

void sayHello(struct Person p) {
  printf("Hello, my name is %s and I am %d years old.\n", p.name, p.age);
}

int main() {
  // Create two objects of the Person struct
  struct Person person1 = {"Alice", 25};
  struct Person person2 = {"Bob", 30};

  // Access the properties of the objects
  printf("%s\n", person1.name); // Output: "Alice"
  printf("%d\n", person2.age); // Output: 30

  // Declare and initialize variables with different data types
  int myNumber = 42;
  char myArray[3][10] = {"apple", "banana", "orange"};
  char myString[] = "Hello, world!";

  // Use the variables in different ways
  printf("%d\n", myNumber * 2); // Output: 84
  printf("%s\n", myArray[1]); // Output: "banana"
  printf("%s\n", strupr(myString)); // Output: "HELLO, WORLD!"

  // Call the sayHello() function with the Person objects
  sayHello(person1); // Output: "Hello, my name is Alice and I am 25 years old."
  sayHello(person2); // Output: "Hello, my name is Bob and I am 30 years old."

  return 0;
}
