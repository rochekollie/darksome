class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def say_hello
    puts "Hello, my name is #{@name} and I am #{@age} years old."
  end
end

# Create two instances of the Person class
person1 = Person.new("Alice", 25)
person2 = Person.new("Bob", 30)

# Access the properties of the instances
puts person1.name        # Output: "Alice"
puts person2.age         # Output: 30

# Declare and initialize variables with different data types
my_number = 42
my_array = ["apple", "banana", "orange"]
my_string = "Hello, world!"

# Use the variables in different ways
puts my_number * 2                   # Output: 84
puts my_array[1]                     # Output: "banana"
puts my_string                       # Output: "Hello, world!"
puts my_string.upcase                # Output: "HELLO, WORLD!"

# Call the say_hello method of the Person instances
person1.say_hello                    # Output: "Hello, my name is Alice and I am 25 years old."
person2.say_hello                    # Output: "Hello, my name is Bob and I am 30 years old."
