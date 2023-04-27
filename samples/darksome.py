# Define a class called Person
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")


# Create two objects of the Person class
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

# Access the properties of the objects
print(person1.name)  # Output: "Alice"
print(person2.age)  # Output: 30

# Declare and initialize variables with different data types
my_number = 42
my_array = ["apple", "banana", "orange"]
my_string = "Hello, world!"

# Use the variables in different ways
print(my_number * 2)  # Output: 84
print(my_array[1])  # Output: "banana"
print(my_string.upper())  # Output: "HELLO, WORLD!"

# Call the say_hello() method of the Person objects
person1.say_hello()  # Output: "Hello, my name is Alice and I am 25 years old."
person2.say_hello()  # Output: "Hello, my name is Bob and I am 30 years old."
