class Person {
    let name: String
    let age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    func sayHello() {
        print("Hello, my name is \(name) and I am \(age) years old.")
    }
}

let person1 = Person(name: "Alice", age: 25)
let person2 = Person(name: "Bob", age: 30)

print(person1.name)    // Output: "Alice"
print(person2.age)     // Output: 30

let myNumber = 42
let myArray = ["apple", "banana", "orange"]
let myString = "Hello, world!"

print(myNumber * 2)    // Output: 84
print(myArray[1])      // Output: "banana"
print(myString)        // Output: "Hello, world!"
print(myString.uppercased())  // Output: "HELLO, WORLD!"

person1.sayHello()     // Output: "Hello, my name is Alice and I am 25 years old."
person2.sayHello()     // Output: "Hello, my name is Bob and I am 30 years old."
