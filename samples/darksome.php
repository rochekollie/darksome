<?php

class Person {
    public $name;
    public $age;

    function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    function sayHello() {
        echo "Hello, my name is $this->name and I am $this->age years old.\n";
    }
}

// Create two objects of the Person class
$person1 = new Person("Alice", 25);
$person2 = new Person("Bob", 30);

// Access the properties of the objects
echo $person1->name . "\n"; // Output: "Alice"
echo $person2->age . "\n";  // Output: 30

// Declare and initialize variables with different data types
$myNumber = 42;
$myArray = array("apple", "banana", "orange");
$myString = "Hello, world!";

// Use the variables in different ways
echo $myNumber * 2 . "\n";                  // Output: 84
echo $myArray[1] . "\n";                    // Output: "banana"
echo $myString . "\n";                      // Output: "Hello, world!"
echo strtoupper($myString) . "\n";          // Output: "HELLO, WORLD!"

// Call the sayHello() method of the Person objects
$person1->sayHello(); // Output: "Hello, my name is Alice and I am 25 years old."
$person2->sayHello(); // Output: "Hello, my name is Bob and I am 30 years old."

?>
