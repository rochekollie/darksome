package main

import (
	"fmt"
	"strings"
)

type Person struct {
	name string
	age  int
}

func (p Person) sayHello() {
	fmt.Printf("Hello, my name is %s and I am %d years old.\n", p.name, p.age)
}

func main() {
	// Create two objects of the Person struct
	person1 := Person{name: "Alice", age: 25}
	person2 := Person{name: "Bob", age: 30}

	// Access the fields of the objects
	fmt.Println(person1.name) // Output: "Alice"
	fmt.Println(person2.age)  // Output: 30

	// Declare and initialize variables with different data types
	myNumber := 42
	myArray := []string{"apple", "banana", "orange"}
	myString := "Hello, world!"

	// Use the variables in different ways
	fmt.Println(myNumber * 2)                  // Output: 84
	fmt.Println(myArray[1])                    // Output: "banana"
	fmt.Println(myString)                      // Output: "Hello, world!"
	fmt.Println(strings.ToUpper(myString))     // Output: "HELLO, WORLD!"

	// Call the sayHello() method of the Person objects
	person1.sayHello() // Output: "Hello, my name is Alice and I am 25 years old."
	person2.sayHello() // Output: "Hello, my name is Bob and I am 30 years old."
}
