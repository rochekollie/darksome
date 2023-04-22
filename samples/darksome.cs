using System;

namespace ConsoleApp
{
    // Define a class called Person
    class Person
    {
        public string name;
        public int age;

        public Person(string name, int age)
        {
            this.name = name;
            this.age = age;
        }

        public void sayHello()
        {
            Console.WriteLine("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Create two objects of the Person class
            Person person1 = new Person("Alice", 25);
            Person person2 = new Person("Bob", 30);

            // Access the properties of the objects
            Console.WriteLine(person1.name); // Output: "Alice"
            Console.WriteLine(person2.age); // Output: 30

            // Declare and initialize variables with different data types
            int myNumber = 42;
            string[] myArray = { "apple", "banana", "orange" };
            string myString = "Hello, world!";

            // Use the variables in different ways
            Console.WriteLine(myNumber * 2); // Output: 84
            Console.WriteLine(myArray[1]); // Output: "banana"
            Console.WriteLine(myString); // Output: "Hello, world!"
            Console.WriteLine(myString.ToUpper()); // Output: "HELLO, WORLD!"

            // Call the sayHello() method of the Person objects
            person1.sayHello(); // Output: "Hello, my name is Alice and I am 25 years old."
            person2.sayHello(); // Output: "Hello, my name is Bob and I am 30 years old."
        }
    }
}
