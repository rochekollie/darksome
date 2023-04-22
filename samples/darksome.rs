struct Person {
    name: String,
    age: i32,
}

impl Person {
    fn new(name: String, age: i32) -> Person {
        Person {
            name,
            age,
        }
    }

    fn say_hello(&self) {
        println!("Hello, my name is {} and I am {} years old.", self.name, self.age);
    }
}

fn main() {
    // Create two instances of the Person struct
    let person1 = Person::new(String::from("Alice"), 25);
    let person2 = Person::new(String::from("Bob"), 30);

    // Access the properties of the instances
    println!("{}", person1.name);       // Output: "Alice"
    println!("{}", person2.age);        // Output: 30

    // Declare and initialize variables with different data types
    let my_number = 42;
    let my_array = vec!["apple", "banana", "orange"];
    let my_string = String::from("Hello, world!");

    // Use the variables in different ways
    println!("{}", my_number * 2);                      // Output: 84
    println!("{}", my_array[1]);                        // Output: "banana"
    println!("{}", my_string);                          // Output: "Hello, world!"
    println!("{}", my_string.to_uppercase());           // Output: "HELLO, WORLD!"

    // Call the say_hello method of the Person instances
    person1.say_hello();                                // Output: "Hello, my name is Alice and I am 25 years old."
    person2.say_hello();                                // Output: "Hello, my name is Bob and I am 30 years old."
}
