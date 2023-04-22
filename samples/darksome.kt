class Person(val name: String, val age: Int) {
    fun sayHello() {
        println("Hello, my name is $name and I am $age years old.")
    }
}

fun main() {
    // Create two objects of the Person class
    val person1 = Person("Alice", 25)
    val person2 = Person("Bob", 30)

    // Access the properties of the objects
    println(person1.name) // Output: "Alice"
    println(person2.age)  // Output: 30

    // Declare and initialize variables with different data types
    val myNumber = 42
    val myArray = arrayOf("apple", "banana", "orange")
    val myString = "Hello, world!"

    // Use the variables in different ways
    println(myNumber * 2)                  // Output: 84
    println(myArray[1])                    // Output: "banana"
    println(myString)                      // Output: "Hello, world!"
    println(myString.toUpperCase())       // Output: "HELLO, WORLD!"

    // Call the sayHello() method of the Person objects
    person1.sayHello() // Output: "Hello, my name is Alice and I am 25 years old."
    person2.sayHello() // Output: "Hello, my name is Bob and I am 30 years old."
}
